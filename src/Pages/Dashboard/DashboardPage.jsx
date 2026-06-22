
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../../firebase';
import styles from './Dashboard.module.css';
import { Section } from '../Section';

const MAX_SIZE = 2 * 1024 * 1024; // 2 MB

const DashboardPage = ({ token }) => {
    const [images, setImages] = useState({});
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            fetchAllImages();
        }
    }, [token, navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const fetchImagesBySection = async (section) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/getImages.php?section=${section}`
            );
    
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
    
            const data = await response.json();
    
            return data.sort((a, b) => b.id - a.id);
    
        } catch (error) {
            console.error(
                `Error fetching images for section ${section}:`,
                error
            );
    
            return [];
        }
    };

    const fetchAllImages = async () => {
        const sections = Object.values(Section);
    
        const imagesBySection = {};
    
        for (const section of sections) {
            imagesBySection[section] =
                await fetchImagesBySection(section);
        }
    
        setImages(imagesBySection);
    };


    const handleUpload = async (e) => {
        e.preventDefault();
        setIsUploading(true);
    
        try {
            const details = new FormData(e.target);
    
            const images = details.getAll('images');
    
            if (images.length === 0) {
                alert('Please select at least one image');
                return;
            }
    
            if (images.length > 10) {
                alert('Maximum 10 images can be uploaded at once');
                return;
            }
    
            const formData = new FormData();
    
            formData.append(
                'section',
                details.get('section')
            );
    
            images.forEach((image) => {
                if (!image.type.startsWith('image/')) {
                    alert(`${image.name} is not an image file`);
                    return;
                }
                if (image.size > MAX_SIZE) {
                    alert(`${image.name} exceeds 10 MB`);
                    return;
                }
                formData.append('images[]', image);
            });
    
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/uploadImages.php`,
                {
                    method: 'POST',
                    body: formData
                }
            );
    
            const data = await response.json();
    
            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || 'Upload failed'
                );
            }
    
            alert(
                `${data.images.length} image(s) uploaded successfully`
            );
    
            fetchAllImages();
    
            e.target.reset();
    
        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setIsUploading(false);
        }
    };


    const handleDelete = async (imageId) => {
        try {
    
            setIsUploading(true);
            const formData = new FormData();
            formData.append('id', imageId);
    
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/deleteImage.php`,
                {
                    method: 'POST',
                    body: formData
                }
            );
    
            const data = await response.json();
    
            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || 'Failed to delete image'
                );
            }
    
            alert('Image deleted successfully');
    
            fetchAllImages();
    
        } catch (error) {
            console.error('Error deleting image:', error);
            alert(error.message);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className={styles.dashboard}>
            {/* Fullscreen Loader Overlay */}
            {isUploading && (
                <div className={styles.overlay}>
                    <div className={styles.loader}>Processing...</div>
                </div>
            )}
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Admin Dashboard</h1>
                <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </nav>


            <form onSubmit={handleUpload} className={styles.form}>
                <input
                    type="file"
                    name="images"
                    multiple
                    accept="image/*"
                    className={styles.inputFile}
                    disabled={isUploading}
                    required
                />
                <select
                    name="section"
                    className={styles.selectCategory}
                    defaultValue={Section.PREWEDDING}
                    disabled={isUploading}
                >
                    <option value={Section.PREWEDDING}>Prewedding</option>
                    <option value={Section.ENGAGEMENT}>Engagement</option>
                    <option value={Section.WEDDING}>Wedding</option>
                    <option value={Section.BIRTHDAY}>Birthday</option>
                    <option value={Section.FAMILY_AND_BABY}>Family and Baby</option>
                </select>

                <button type="submit" className={styles.uploadButton} disabled={isUploading}>
                    Upload Image
                </button>
            </form>


            <div className={styles.imageGallery}>
                {Object.keys(images).map((category) => (
                    <div key={category} className={styles.imageCategory}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <div className={styles.imageGrid}>
                            {images[category].length > 0 ? (
                                images[category].map((image) => (
                                    <div key={image.id} className={styles.imageContainer}>
                                        <img src={image.cloudinary_url} alt={category} className={styles.image} />
                                        <button
                                            onClick={() => handleDelete(image.id)}
                                            className={styles.deleteButton}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No images found for this category.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;


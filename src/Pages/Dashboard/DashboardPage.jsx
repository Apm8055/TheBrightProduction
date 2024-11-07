
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../../firebase';
import styles from './Dashboard.module.css';


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

    const fetchImagesByCategory = async (category) => {
        try {
            const response = await fetch(
                `https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=${category}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching images for category ${category}:`, error);
            return [];
        }
    };

    const fetchAllImages = async () => {
        const categories = ['prewedding', 'engagement', 'wedding', 'birthday', 'familyandbaby'];
        const imagesByCategory = {};

        for (let category of categories) {
            const images = await fetchImagesByCategory(category);
            imagesByCategory[category] = images;
        }

        setImages(imagesByCategory);
    };


    const handleUpload = async (e) => {
        e.preventDefault();
        setIsUploading(true); // Start loading

        const Details = new FormData(e.target);
        const formData = new FormData();
        formData.append('file', Details.get('file'));
        formData.append('upload_preset', 'my_preset');
        formData.append('folder', Details.get('selectedCategory'));

        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve({ ImageWidth: img.width, ImageHeight: img.height });
                img.onerror = reject;
            });
        };

        try {
            const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dtamfjqa4/image/upload', {
                method: 'POST',
                body: formData,
            });

            const cloudinaryData = await cloudinaryResponse.json();
            const imageUrl = cloudinaryData.secure_url;

            const { ImageWidth, ImageHeight } = await loadImage(imageUrl);
            console.log({ src: imageUrl, category: Details.get('selectedCategory'), width: ImageWidth, height: ImageHeight });

            await fetch('https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/saveImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ src: imageUrl, category: Details.get('selectedCategory'), width: ImageWidth, height: ImageHeight }),
            });

            alert('Image uploaded and URL saved to MongoDB');
            fetchAllImages();  // Refresh images after upload
            e.target.reset(); // Clear form fields after upload
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
        } finally {
            setIsUploading(false); // End loading
        }
    };


    const handleDelete = async (imageId, cloudinaryId) => {
        try {
            await fetch(`https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/deleteImage`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageId, cloudinaryId }),
            });

            alert('Image deleted successfully');
            fetchAllImages();  // Refresh images after deletion
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <div className={styles.dashboard}>
            {/* Fullscreen Loader Overlay */}
            {isUploading && (
                <div className={styles.overlay}>
                    <div className={styles.loader}>Uploading...</div>
                </div>
            )}
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Admin Dashboard</h1>
                <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </nav>


            <form onSubmit={handleUpload} className={styles.form}>
                <input type="file" name="file" className={styles.inputFile} disabled={isUploading} required/>
                <select name="selectedCategory" className={styles.selectCategory} defaultValue="prewedding" disabled={isUploading}>
                    <option value="prewedding">Prewedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="familyandbaby">Family and Baby</option>
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
                                    <div key={image._id} className={styles.imageContainer}>
                                        <img src={image.src} alt={category} className={styles.image} />
                                        <button
                                            onClick={() => handleDelete(image._id, image.cloudinaryId)}
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


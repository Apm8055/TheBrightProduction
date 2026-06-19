<?php

class Image
{
    private int $id;
    private string $cloudinaryPublicId;
    private string $cloudinaryUrl;
    private string $createdAt;
    private string $section;
    private int $width;
    private int $height;

    public function __construct(
        int $id,
        string $cloudinaryPublicId,
        string $cloudinaryUrl,
        string $createdAt,
        string $section,
        int $width,
        int $height
    ) {
        $this->id = $id;
        $this->cloudinaryPublicId = $cloudinaryPublicId;
        $this->cloudinaryUrl = $cloudinaryUrl;
        $this->createdAt = $createdAt;
        $this->section = $section;
        $this->width = $width;
        $this->height = $height;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getCloudinaryPublicId(): string
    {
        return $this->cloudinaryPublicId;
    }

    public function getCloudinaryUrl(): string
    {
        return $this->cloudinaryUrl;
    }

    public function getCreatedAt(): string
    {
        return $this->createdAt;
    }

    public function getSection(): string
    {
        return $this->section;
    }

    public function getWidth(): int
    {
        return $this->width;
    }

    public function getHeight(): int
    {
        return $this->height;
    }
}
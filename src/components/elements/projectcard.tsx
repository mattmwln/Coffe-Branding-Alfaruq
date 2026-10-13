import React from "react";
import styled from "styled-components";

interface CardProps {
  src?: string; // URL gambar (opsional)
  category: string; // Kategori teks
  title: string; // Judul kartu
  author: string; // Nama penulis
  daysAgo: number; // Jumlah hari lalu
}

const Card: React.FC<CardProps> = ({ 
  src = "https://via.placeholder.com/200x150", // Fallback gambar default
  category, 
  title, 
  author, 
  daysAgo 
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url('${src}')`,
          }}
        />
        <div className="card-content">
          <div className="category">{category}</div>
          <div className="heading">
            {title}
            <div className="author">
              By <span className="name">{author}</span> {daysAgo} days ago
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    overflow: hidden;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-image {
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 12px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;

    @media (max-width: 768px) {
      height: auto;
      aspect-ratio: 4/3;
    }
  }

  .card-image:hover {
    transform: scale(1.05);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  .category {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: bold;
    color: rgb(63, 121, 230);
    padding-bottom: 5px;
    transition: color 0.3s ease;
  }

  .category:hover {
    color: rgb(47, 97, 185);
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    margin-bottom: 10px;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  .heading:hover {
    color: rgb(47, 47, 47);
    cursor: pointer;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 0.9em;
  }

  .name {
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .name:hover {
    color: rgb(63, 121, 230);
    cursor: pointer;
  }
`;

export default Card;

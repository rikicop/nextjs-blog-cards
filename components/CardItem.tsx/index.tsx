import styled from "styled-components";
import { ArticleItemProps } from "../../Interfaces";
import { useRouter } from "next/router";

const CardContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.03);
  }
  &:hover .btn-wrapper .card-btn {
    background: #c22222;
    color: #fff;
  }

  .card-head {
    .image-wrapper {
      img {
        filter: brightness(95%);
      }
    }
    .card-title {
      margin: 1rem;
    }
    .card-excerpt {
      padding: 0 1rem;
    }
  }
  .info-author {
    margin-top: 10px;
    border-top: #3e3c3c solid 1px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name-author {
      font-size: 1.2rem;
      font-weight: bold;
      color: #3e3c3c;
    }
    .img-author {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
`;

const CardItem = ({ data }: ArticleItemProps) => {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/article/${data.id}`)}>
      <div className="card-head">
        <div className="image-wrapper">
          <img
            src={data.picture}
            alt="receta"
            style={{ height: "15vw", width: "100%", objectFit: "cover" }}
          />
        </div>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-excerpt">{data.excerpt}</p>
      </div>
      <div className="info-author">
        <p className="name-author">{data.author}</p>
        <img className="img-author" src={data.authorPicture} alt="author" />
      </div>
    </CardContainer>
  );
};

export default CardItem;

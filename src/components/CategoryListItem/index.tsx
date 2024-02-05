import "./index.scss";
interface CategoryListItemProps {
  title?: string;
  srcImg?: string;
}

const CategoryListItem = ({
  title = "Categoría",
  srcImg = "https://s3-alpha-sig.figma.com/img/bf54/4cba/78e1ea53533fb02002b76347073de3f3?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhXLTDfiZrznsKnn1uFpWl7NTyhQniKLDIgazp00~9pdx81hcwhxWMunfFvuiPt6hHEajFPQOHtWKx4CtejB7w6SvFq7oaD1K1R49Ehx973oYIBlEZmoTryZ~7UhmkBKVjCmCSvnOuwxYZ0ThKkkRXTL5T4KEJyzHuMlLJM0PUoiipD680SibBIwAE081n~jHDP4CYq~7Cvw4i3Q6Jk2MzrdA-ItIvqYPlCyuj76d86wVYDC8ju-LcFU6~~J9RR06zldEmNtEQKn79LKqc23q2diskICQlsDcps3~Fq9y2-aI02Uzv2cMoz6173hxm~an3yVi~L8wgIik~TQKFjtWQ__",
}: CategoryListItemProps) => {
  return (
    <div className="category--list--item--container">
      <img src={srcImg}></img>
      <p className="category--list--item--title">{title}</p>
    </div>
  );
};

export default CategoryListItem;

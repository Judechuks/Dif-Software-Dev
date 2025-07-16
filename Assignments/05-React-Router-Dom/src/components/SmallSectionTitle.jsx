import halfLeaf from "../assets/icon/half-leaf.svg";

const SmallSectionTitle = ({ hasImg, title }) => {
  return (
    <div className="small-section-title">
      {hasImg && <img src={halfLeaf} alt="section title" />}
      {title}
    </div>
  );
};

export default SmallSectionTitle;

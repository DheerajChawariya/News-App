import image from '../assets/R.jpeg'
const NewsItems = ({title, description, src, url}) => {
  return (
    <div className=" d-inline-block">
    <div className="card bg-dark text-light  my-2 mx-2 px-2 py-2"style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{ height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90): "This is my description"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}

export default NewsItems

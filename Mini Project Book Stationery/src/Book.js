export const Book = (props) => {
    const {img,title,author} = props.book;
    //attribute,eventHandler
    const clickHandler = () => {
        alert('Hello,World!')
    }
    return(
        <article className="book">

            <img src={img} alt="" />
            <h2 onClick={()=>console.log(title)}>{title}</h2>
            <h1>{author}</h1>
            <button type="button" onClick={clickHandler}>Example</button>
          
        </article>
    );
}
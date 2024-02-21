import React from "react";

function Article(props) {

    // <img src={props.img} />
  return (

    <tr>
      <td> <img src={props.img} /> <a href={props.url}>{props.title}</a></td>
    </tr>

  
  );
}

export default Article;
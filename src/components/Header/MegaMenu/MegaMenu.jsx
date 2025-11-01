export const MegaMenu = ({ panel }) => {
  return (
    <div>
      <div>
        <div>
          {panel.colums.map((colum, i) => {
            <div key={i}>
              <h3>{colum.title}</h3>
              <ul>
                {colum.items.map((item, j) => {
                  <li key={j}>
                    <a href={item.path}>{item.label}</a>
                  </li>;
                })}
              </ul>
            </div>;
          })}
          {panel.images && (
            <div>
              {panel.images.map((img, i) => (
                <a href={img.path} key={i} >
                  <img src={img.src} alt={img.caption}/>
                  <p>{img.caption}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

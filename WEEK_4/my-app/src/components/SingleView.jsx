const SingleView = (props) => {
    const {item, setSelectedItem} = props;
    let type = "";
    
    return (
        <>
            {item && (
                <dialog open>
                    <td>
                        <img src={item.thumbnail} alt={item.title} />
                    </td>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.username}</div>
                    {(item.media_type) == "image/jpeg" ? <img></img> : <video></video>}
                    <button onClick={() => setSelectedItem('')}>Close</button>
                </dialog>
            )}
        </>
    )
};

export default SingleView;
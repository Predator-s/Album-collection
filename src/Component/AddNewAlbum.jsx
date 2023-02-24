import Radium from "radium";
import React, { useState } from "react";

export default Radium(function AddNewAlbum(props) {

    const [albumTitle, setAlbumTitle] = useState("");
    const [albumBody, setAlbumBody] = useState("");

    const style = {
        addNewAlbumButton: {
            "height": "300px",
            "width": "300px",
            "minWidth": "250px",
            "borderRadius": "0.75rem",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "cursor": "pointer",
            "border": "2px solid black",
            "transition": "all 0.25s ease-in-out",
            "background": "aliceblue",

            ':hover': {
                "boxShadow": "0 0 10px 2.5px #555",
                "transform": "scale(1.05)",
                "background": "linear-gradient(to bottom, rgb(248, 231, 200), lightpink)"
            }
        },

        addNewAlbumH1: {
            "fontWeight": "100",
            "color": "#111"
        }
    }

    async function onSubmitHandler(event) {
        event.preventDefault();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: albumTitle,
                body: albumBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseJSON = await response.json();
        console.log(responseJSON);
        props.onAddNewAlbum(responseJSON);
        setAlbumBody('')
        setAlbumTitle('')
    }

    return (
        <React.Fragment>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={style.addNewAlbumButton}>
                <p>
                    <img
                        src="https://th.bing.com/th/id/R.08b8f4174552dbfd0fa3ea7aed70d7af?rik=mPnG%2bQYS64WMrw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_48063.png&ehk=CQMnUuNIphS4lniVNpoJVBKaU8qC60tgE%2fkN9j6U45k%3d&risl=&pid=ImgRaw&r=0"
                        width={"50px"}
                        alt="..."
                    />
                </p>
                <h1 style={style.addNewAlbumH1}>+ Add Album</h1>
            </button>

            <div className="modal fade" id="staticBackdrop" style={{"backdropFilter": "blur(5px)"}} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title display-6 text-center w-100" id="staticBackdropLabel">Add Your Album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="form-label">Enter Title</label>
                                    <input onChange={(e) => { setAlbumTitle(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput2" value={albumTitle} placeholder="Enter Title" required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput3" className="form-label">Enter Body</label>
                                    <input onChange={(e) => { setAlbumBody(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput3" value={albumBody} placeholder="Enter Body" required></input>
                                </div>
                                <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
})
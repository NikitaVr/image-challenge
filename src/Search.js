import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import getImages from './services/pixabay'

export default function Search(props) {
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState(null);

    async function search() {
        const result = await getImages();
        setImages(result.hits)
    }

    function selectImage(previewURL) {
        handleClose()
        props.onSelect(previewURL)
    }

    useEffect(() => {
        search()
        // do we need to cleanup the event listener here of useEffect?
    }, []); // runs only once at start since we passed []

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ position: "absolute", bottom: "2em", right: "2em" }}>
                Add
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth={"xl"}
            >
                <DialogTitle id="form-dialog-title">Add Image</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type in the search field to add an image
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Search"
                        type="search"
                        fullWidth
                    />
                    {images ? images.map((image) => {
                        return <img src={image.previewURL} onClick={() => selectImage(image.previewURL)} />
                    }
                    ) : null}
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div >
    );
}
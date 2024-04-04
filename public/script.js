"use strict";
(function () {

    window.addEventListener("load", init);
    function init() {
        refreshTable();
    }

    let newButton = id("new-product-btn");
    newButton.addEventListener("click", function () {
        id("form-popup").style.display = "block";
    });
    let updateButton = id("update-product-btn");
    updateButton.addEventListener("click", function () {
        id("update-form-popup").style.display = "block";
    });


    let saveButton = id("save-product");
    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        submitForm();
    });
    let updateSaveButton = id("update-save-product");
    updateSaveButton.addEventListener("click", function (e) {
        e.preventDefault();
        let id=e.currentTarget.value;
        submitUpdateForm(id);
    });


    let closeButton = id("cancel-btn");
    closeButton.addEventListener("click", function (e) {
        id("form-container").reset();
        id("form-popup").style.display = "none";
    });
    let closeUpdateButton = id("update-cancel-btn");
    closeUpdateButton.addEventListener("click", function (e) {
        id("update-form-container").reset();
        id("update-form-popup").style.display = "none";
    });

    let deleteButton=id("delete-product-btn");
    deleteButton.addEventListener("click", function (event) {
        let id=event.currentTarget.value;
        fetch("http://localhost:8000/menu/delete/"+id, {
            method: "DELETE",           
        })
            .catch(alert);
    });

    function submitForm() {
        let params = new FormData(id("form-container")); // pass in entire form tag
        let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
        fetch("http://localhost:8000/menu/new", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: jsonBody,
        })
            .then(refreshTable)
            .catch(alert);
    }

    function submitUpdateForm(id) {
        let params = new FormData(document.getElementById("update-form-container")); // pass in entire form tag
        let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
        fetch("http://localhost:8000/menu/update/"+id, {
            method: "PUT",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: jsonBody,
        })
            .then(refreshTable)
            .catch(alert);
    }

    function refreshTable() {
        id("form-popup").style.display = "none";
        id("form-container").reset();   
        
        id("update-form-popup").style.display = "none";
        id("update-form-container").reset();    
    }

    function id(idName) {
        return document.getElementById(idName);
    }
})();
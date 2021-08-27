class UserService {
    static login(userName, password) {
        console.log("User : ", userName);
        console.log("pass : ", password);
        const selectedData = {
            "selector": {
                email: userName,
                password: password
            },
            "fields": ["_id", "_rev", "name", "email", "password", "balance"]
        };
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users/_find";
        return (axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }));
    }
    static register(registerObj) {

        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users";
        return (axios.post(url, registerObj, { headers: { 'Authorization': basicAuth } }));
    }

    static update(data, id, rev) {
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users";
        return (axios.put(url + "/" + id + "?rev=" + rev, data, { headers: { 'Authorization': basicAuth } }));
    }
    static data(data, id, rev) {

        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users";
        return (axios.put(url + "/" + id + "?rev=" + rev, data, { headers: { 'Authorization': basicAuth } }));
    }
    static userDetails(id) {
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users";
        return (axios.get(url + `/${id}`, { headers: { 'Authorization': basicAuth } }));
    }
    static history(obj){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/userhistory";
        return (axios.post(url,obj, { headers: { 'Authorization': basicAuth } }));
    }
}
class UserService {
    static login(userName, password) {
        console.log("User : ", userName);
        console.log("pass : ", password);
        const selectedData = {
            "selector": {
                email: userName,
                password: password
            },
            "fields": ["_id", "_rev", "name", "email", "password", "balance","role"]
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

    static update(updatedData, updateId, upadterevId) {
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users";
        return (axios.put(url + "/" + updateId + "?rev=" + upadterevId, updatedData, { headers: { 'Authorization': basicAuth } }));
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

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users/";
        return (axios.get(url+id, { headers: { 'Authorization': basicAuth } }));
    }
    static history(obj){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/userhistory";
        return (axios.post(url,obj, { headers: { 'Authorization': basicAuth } }));
    }

    static listHistory(){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/userhistory/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }

    static isExist(data){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users/_find";
        return axios.post(url, data, { headers: { 'Authorization': basicAuth } });
    }
    static listPlan(){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/planlist/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    static addPlan(planObj){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
            const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
            const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

            let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/planlist";
           return axios.post(url, planObj, { headers: { 'Authorization': basicAuth } });
    }
    static listUsers(){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url =
        "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users/_all_docs?include_docs=true";
         return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    static deleteUser(id,revId){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
            const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
            const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
            let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users/" + id + "?rev=" + revId;
           return axios.delete(url, { headers: { 'Authorization': basicAuth } })

    }
    static searchPlan(){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/planlist/_all_docs?include_docs=true";
       return axios.get(url, { headers: { 'Authorization': basicAuth } })
    }
    static deletePlan(id,revId){
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/planlist/" + id + "?rev=" + revId;
       return axios.delete(url, { headers: { 'Authorization': basicAuth } })
}
}
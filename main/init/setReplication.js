// init/ 
config = { _id: "mongoset", 
    members: 
    [{ _id: 0, host: "mongo1:27017" }, 
    { _id: 1, host: "mongohost:27017" }, 
    { _id: 2, host: "mongohost:27017" },] 
}
rs.initiate(config);
rs.conf();

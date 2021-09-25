// init/ 
config = { _id: "rs1", 
    members: 
    [{ _id: 0, host: "mainhost:30001" }, 
    { _id: 1, host: "mongohost:30002" }, 
    { _id: 2, host: "mongohost:30003", "arbiterOnly": true},] 
}
rs.initiate(config);
rs.conf();

// collection of resources
var resources = new Map();
resources.set("resource0", {});
resources.set("resource1", {});

// collection of tasks assigned to resources
var tasks = new Map();
tasks.set(0, {"resource": resources.get("resource0")});
tasks.set(1, {"resource": resources.get("resource1")});

var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(0, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare4 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare5 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare6 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(128, 0, 255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare7 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(25,247,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare8 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,174,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare11 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 102)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare12 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(128, 0, 255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare13 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint13);
        },
        endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(240,228,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare14 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint14);
        },
        endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare15 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint15);
        },
        endpoint16 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare16 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint16);
        },
        
        endpoint17 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare17 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint18 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(34,177,76)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare18= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint19 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,174,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare19 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint20 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare20 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint21 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare21 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint22 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare22 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint23 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare23 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint24 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare24= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint25 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,174,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare25 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint26 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 102)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare26 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint27 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare27 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint13);
        },
        endpoint28 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare28 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint14);
        },
        endpoint29 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare29 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint15);
        },
        endpoint30 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "black" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare30 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint16);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        
        
        Connector: [ "Bezier", { curviness: -50 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare15("ld15"),
            e16 = prepare16("ld16"),
            e17 = prepare17("ld17"),
            e18 = prepare18("ld18"),
            e19 = prepare19("ld19"),
            e20 = prepare20("ld20"),
            e21 = prepare21("ld21"),
            e22 = prepare22("ld22"),
            e23 = prepare23("ld23"),
            e24 = prepare24("ld24"),
            e25 = prepare25("ld25"),
            e26 = prepare26("ld26"),
            e27 = prepare27("ld27"),
            e28 = prepare28("ld28"),
            e29 = prepare29("ld29"),
            e30 = prepare30("ld30"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });


        
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_17_8 = [
            {
                "source": "ld17",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld17"
            }
        ];

        var correct_connections_8_9 = [
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            }
        ];
        var correct_connections_10_15 = [
            {
                "source": "ld10",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld10"
            }
        ];
         var correct_connections_16_24 = [
            {
                "source": "ld16",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld16"
            }
        ];
         var correct_connections_19_12 = [
            {
                "source": "ld19",
                "target": "ld12"
            },
    
            {
                "source": "ld12",
                "target": "ld19"
            }
        ];
         var correct_connections_12_13 = [
            {
                "source": "ld12",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld12"
            }
        ];
         var correct_connections_14_22 = [
            {
                "source": "ld14",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld14"
            }
        ];
        
         var correct_connections_23_26 = [
            {
                "source": "ld23",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld23"
            }
        ];
         var correct_connections_18_20 = [
            {
                "source": "ld18",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld18"
            }
        ];
         var correct_connections_21_25 = [
            {
                "source": "ld21",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld21"
            }
        ];
         var correct_connections_7_20= [
            {
                "source": "ld7",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld7"
            }
        ];
         var correct_connections_11_20= [
            {
                "source": "ld11",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld11"
            }
        ];
         var correct_connections_5_17 = [
            {
                "source": "ld5",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld5"
            }
        ];
         var correct_connections_6_18 = [
            {
                "source": "ld6",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld6"
            }
        ];
         var correct_connections_1_27 = [
           
    
            {
                "source": "ld1",
                "target": "ld27"
            }
        ];
         var correct_connections_2_28 = [
           
    
            {
                "source": "ld2",
                "target": "ld28"
            }
        ];
         var correct_connections_3_29 = [
           
    
            {
                "source": "ld3",
                "target": "ld29"
            }
        ];
         var correct_connections_4_30 = [
            
    
            {
                "source": "ld4",
                "target": "ld30"
            }
        ];


        var allowed_connections = [
            {
                "source": "ld17",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld17"
            },
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            },
            {
                "source": "ld10",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld10"
            },
             {
                "source": "ld16",
                "target": "ld24"
            },
             {
                "source": "ld24",
                "target": "ld16"
            },
             {
                "source": "ld19",
                "target": "ld12"
            },
             {
                "source": "ld12",
                "target": "ld19"
            },
             {
                "source": "ld12",
                "target": "ld13"
            },
             {
                "source": "ld13",
                "target": "ld12"
            },
             {
                "source": "ld14",
                "target": "ld22"
            },
             {
                "source": "ld22",
                "target": "ld14"
            },
             {
                "source": "ld23",
                "target": "ld26"
            },
             {
                "source": "ld26",
                "target": "ld23"
            },
             {
                "source": "ld18",
                "target": "ld20"
            },
             {
                "source": "ld20",
                "target": "ld18"
            },
             {
                "source": "ld21",
                "target": "ld25"
            },
             {
                "source": "ld25",
                "target": "ld21"
            },
             {
                "source": "ld7",
                "target": "ld20"
            },
             {
                "source": "ld20",
                "target": "ld7"
            },
             {
                "source": "ld11",
                "target": "ld20"
            },
             {
                "source": "ld20",
                "target": "ld11"
            },
             {
                "source": "ld5",
                "target": "ld17"
            },
             {
                "source": "ld17",
                "target": "ld5"
            },
             {
                "source": "ld6",
                "target": "ld18"
            },
             {
                "source": "ld18",
                "target": "ld6"
            },
            
             {
                "source": "ld1",
                "target": "ld27"
            },
            
             {
                "source": "ld2",
                "target": "ld28"
            },
            
             {
                "source": "ld3",
                "target": "ld29"
            },
            
             {
                "source": "ld4",
                "target": "ld30"
            },
             
         ];
         var actual_connections = instance.getAllConnections();

        var is_connected_17_8= false;
        var is_connected_8_9 = false;
        var is_connected_10_15 = false;
        var is_connected_16_24 = false;
        var is_connected_19_12 = false;
        var is_connected_12_13 = false;
        var is_connected_14_22 = false;
        var is_connected_23_26 = false;
        var is_connected_18_20 = false;
        var is_connected_21_25 = false;
        var is_connected_7_20 = false;
        var is_connected_11_20 = false;
        var is_connected_5_17 = false;
        var is_connected_6_18 = false;
        var is_connected_1_27 = false;
        var is_connected_2_28= false;
        var is_connected_3_29 = false;
        var is_connected_4_30 = false;

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_8){
                is_connected_17_8= correct_connections_17_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_15){
                is_connected_10_15 = correct_connections_10_15 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_16_24){
                is_connected_16_24 = correct_connections_16_24 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_19_12){
                is_connected_19_12 = correct_connections_19_12 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_12_13){
                is_connected_12_13 = correct_connections_12_13 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_22){
                is_connected_14_22 = correct_connections_14_22 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_26){
                is_connected_23_26 = correct_connections_23_26 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_20){
                is_connected_18_20 = correct_connections_18_20 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_25){
                is_connected_21_25 = correct_connections_21_25 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_20){
                is_connected_7_20 = correct_connections_7_20 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_11_20){
                is_connected_11_20 = correct_connections_11_20 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_17){
                is_connected_5_17 = correct_connections_5_17 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_18){
                is_connected_6_18 = correct_connections_6_18 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_27){
                is_connected_1_27 = correct_connections_1_27 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_28){
                is_connected_2_28 = correct_connections_2_28 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_3_29){
                is_connected_3_29 = correct_connections_3_29 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_30){
                is_connected_4_30 = correct_connections_4_30 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });

        if ( is_connected_17_8&&is_connected_8_9&&is_connected_10_15&&is_connected_16_24&&is_connected_19_12&&is_connected_12_13&&is_connected_14_22
        &&is_connected_23_26&&is_connected_18_20&&is_connected_21_25&&is_connected_7_20&&is_connected_11_20&&is_connected_5_17
        &&is_connected_6_18&&is_connected_1_27&&is_connected_2_28&&is_connected_3_29&&is_connected_4_30  && !unallowed_connection_present) {
            alert("correct connection");
            rightconnection=true;
            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");
            return;
            }
        else if(!unallowed_connection_present){
                               alert("Please complete connection");
                               }
            else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});


//Scripting of mcb begins

var mcboffstate=true;
var were=240;
function mcbonoff()
{   
    if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
   else
    {
        if (mcboffstate==true)
        {       
            mcboffstate=false;
        document.getElementById('select_1').disabled = false;
        document.getElementById('mcbb').src='images/mcb2.png';
       
        
         
    

          
     }  }     
}

//Scripting of mcb ends




var attcounter=1;
function addtotable()
        {
            if (mcboffstate==true)
                     {
                      alert("Alert! Please on mcb first");          
                     }
       else if(this.value==1 )
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 200;
  var currentVal3 = 2;
  var currentVal4 = 2.45;
  var currentVal5 = 2.1;
  var currentVal6 = 340;
  var currentVal7 = 400;
  var currentVal8 = 740;
  var currentVal9 = 756.32;
  var currentVal10 = 5;

       
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  var td9 = tr.appendChild(document.createElement('td'));
  var td10 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  td9.innerHTML=currentVal9;
  td10.innerHTML=currentVal10;
  document.getElementById("tb1").appendChild(tr);
}
else if(this.value==2 )
       {

        
           var currentVal1 = attcounter++;
  var currentVal2 = 210;
  var currentVal3 = 2.1;
  var currentVal4 = 2.5;
  var currentVal5 = 2.2;
  var currentVal6 = 405;
  var currentVal7 = 433;
  var currentVal8 = 838;
  var currentVal9 = 860.81;
  var currentVal10 = 3.09;
   
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
   var td9 = tr.appendChild(document.createElement('td'));
    var td10 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  td9.innerHTML=currentVal9;
  td10.innerHTML=currentVal10;
  document.getElementById("tb1").appendChild(tr);
}
else if(this.value==3 )
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 220;
  var currentVal3 = 2.2;
  var currentVal4 = 2.6;
  var currentVal5 = 2.28;
  var currentVal6 = 445;
  var currentVal7 = 465;
  var currentVal8 = 910;
  var currentVal9 = 899.23;
  var currentVal10 = 1.1;
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  var td9 = tr.appendChild(document.createElement('td'));
  var td10 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  td9.innerHTML=currentVal9;
  td10.innerHTML=currentVal10;
  document.getElementById("tb1").appendChild(tr);
}
else if(this.value==4)
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 230;
  var currentVal3 = 2.3;
  var currentVal4 = 2.8;
  var currentVal5 = 2.4;
  var currentVal6 = 490;
  var currentVal7 = 520;
  var currentVal8 = 1010;
  var currentVal9 = 995.91;
  var currentVal10 = 1.3;
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  var td9 = tr.appendChild(document.createElement('td'));
  var td10 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  td9.innerHTML=currentVal9;
  td10.innerHTML=currentVal10;
  document.getElementById("tb1").appendChild(tr);
}

else
{
    return;
}


}



//Scrypting of table ends

//Scryting of variation of bulbs begins

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function(){  
    value = this.value;
   
    if (this.value == 1) {
        
        rangeChange1();
        range901();
        


        document.getElementById('bulb5').src = 'images/bulboff.png'
        document.getElementById('bulb9').src = 'images/bulboff.png'
        document.getElementById('bulb8').src = 'images/bulboff.png'
        document.getElementById('bulb7').src = 'images/bulboff.png'
        document.getElementById('bulb6').src = 'images/bulboff.png'
        document.getElementById('bulb4').src = 'images/bulboff.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulbon.png'
        document.getElementById('bulb1').src = 'images/bulbon.png'
        document.getElementById('bulb10').src = 'images/bulboff.png'
        document.getElementById('bulb11').src = 'images/bulboff.png'
        document.getElementById('bulb12').src = 'images/bulboff.png'
    }    
    if (this.value == 2) {
           
        rangeChange2();
        range902(); 
        
 
        document.getElementById('bulb5').src = 'images/bulbon.png'
        document.getElementById('bulb9').src = 'images/bulboff.png'
        document.getElementById('bulb8').src = 'images/bulboff.png'
        document.getElementById('bulb7').src = 'images/bulboff.png'
        document.getElementById('bulb6').src = 'images/bulbon.png'
        document.getElementById('bulb4').src = 'images/bulbon.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulbon.png'
        document.getElementById('bulb1').src = 'images/bulbon.png'
       
        document.getElementById('bulb10').src = 'images/bulboff.png'
         document.getElementById('bulb11').src = 'images/bulboff.png'
          document.getElementById('bulb12').src = 'images/bulboff.png'
    }  
    if (this.value == 3) {
        
        rangeChange3(); 
        range903();
        
     document.getElementById('bulb5').src = 'images/bulbon.png'
        document.getElementById('bulb9').src = 'images/bulbon.png'
        document.getElementById('bulb8').src = 'images/bulbon.png'
        document.getElementById('bulb7').src = 'images/bulbon.png'
        document.getElementById('bulb6').src = 'images/bulbon.png'
        document.getElementById('bulb4').src = 'images/bulbon.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulbon.png'
        document.getElementById('bulb1').src = 'images/bulbon.png'
        document.getElementById('bulb10').src = 'images/bulboff.png'
         document.getElementById('bulb11').src = 'images/bulboff.png'
          document.getElementById('bulb12').src = 'images/bulboff.png'
       
    }
    if (this.value == 4) {
        
        rangeChange4();
        range904(); 
         
    
        document.getElementById('bulb5').src = 'images/bulbon.png'
        document.getElementById('bulb9').src = 'images/bulbon.png'
        document.getElementById('bulb8').src = 'images/bulbon.png'
        document.getElementById('bulb7').src = 'images/bulbon.png'
        document.getElementById('bulb6').src = 'images/bulbon.png'
        document.getElementById('bulb4').src = 'images/bulbon.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulbon.png'
        document.getElementById('bulb1').src = 'images/bulbon.png'
        document.getElementById('bulb10').src = 'images/bulbon.png'
         document.getElementById('bulb11').src = 'images/bulbon.png'
          document.getElementById('bulb12').src = 'images/bulbon.png'
    }
    
};

//Scryting of variation of bulbs begins


//Scripting of needle range begins
    var rangeClock1 =  document.querySelector('#needle1');
    var rangeClock2 =  document.querySelector('#needle2');
    var rangeClock3 =  document.querySelector('#needle3');
     var rangeClock4 =  document.querySelector('#needle4');
      var rangeClock5 =  document.querySelector('#needle5');
       var rangeClock6 =  document.querySelector('#needle6');

       var text1 = document.getElementById('text_1');
    var text2 = document.getElementById('text_2');
    var text3 = document.getElementById('text_3');
    var text4 = document.getElementById('text_4');
     var text5 = document.getElementById('text_5');
    var text6 = document.getElementById('text_6');
 function rangeChange1() {
        rangeClock1.style.transform = 'rotate(1.3deg)';
        rangeClock2.style.transform = 'rotateZ(-7.2deg)';
        rangeClock3.style.transform = 'rotate(-25.4deg)';
         rangeClock4.style.transform = 'rotate(2.7deg)';
          rangeClock5.style.transform = 'rotate(12.6deg)';
           rangeClock6.style.transform = 'rotate(4.4deg)';
    }
    function rangeChange2() {
      rangeClock1.style.transform = 'rotate(3.4deg)';
      rangeClock2.style.transform = 'rotateZ(1.6deg)';
      rangeClock3.style.transform = 'rotate(-23.9deg)';
       
       rangeClock4.style.transform = 'rotate(5deg)';
       rangeClock5.style.transform = 'rotate(14.3deg)';
       rangeClock6.style.transform = 'rotate(6.3deg)';
       
       
  }
  function rangeChange3() {
    rangeClock1.style.transform = 'rotate(5.6deg)';
    rangeClock2.style.transform = 'rotateZ(6.4deg)';
    rangeClock3.style.transform = 'rotate(-21.3deg)';
    rangeClock4.style.transform = 'rotate(7.3deg)';
    rangeClock5.style.transform = 'rotate(16.4deg)';
    rangeClock6.style.transform = 'rotate(7.5deg)';
  }
   function rangeChange4() {
    rangeClock1.style.transform = 'rotate(8.6deg)';
    rangeClock2.style.transform = 'rotateZ(12.5deg)';
    rangeClock3.style.transform = 'rotate(-17.5deg)';
    rangeClock4.style.transform = 'rotate(10.1deg)';
    rangeClock5.style.transform = 'rotate(21.4deg)';
    rangeClock6.style.transform = 'rotate(11.3deg)';
  }
  

//Scripting of needle range ends

//Scripting of transformer range begins
    var range90 =  document.querySelector('#knob');
 function range901() {
        range90.style.transform = 'rotate(377deg)';
    }
    function range902() {
      range90.style.transform = 'rotate(425deg)';   
  }
  function range903() {
    range90.style.transform = 'rotate(119.5deg)';
  }
   function range904() {
    range90.style.transform = 'rotate(166deg)';
  }
  

//Scripting of transformer range ends
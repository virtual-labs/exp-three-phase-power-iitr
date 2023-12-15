var rightconnection = false;
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255,255,0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(0, 0, 0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
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
            connectorStyle: { strokeWidth: 4, stroke: "green" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(128, 0, 255)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(25,247,1)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,174,94)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 102)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(128, 0, 255)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(240,228,0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
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
            connectorStyle: { strokeWidth: 4, stroke: "green" },
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
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(34,177,76)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare18 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint19 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,174,94)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
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
            connectorStyle: { strokeWidth: 4, stroke: "green" },
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
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
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
            connectorStyle: { strokeWidth: 4, stroke: "green" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare24 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint25 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,174,94)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 102)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "red" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255,255,0)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "rgb(0,0,255)" },
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
            connectorStyle: { strokeWidth: 4, stroke: "black" },
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
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Connector: ["Bezier", { curviness: -50 }],
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
        var correct_connections_7_20 = [
            {
                "source": "ld7",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld7"
            }
        ];
        var correct_connections_11_20 = [
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
            },

            {
                "source": "ld27",
                "target": "ld1"
            }

        ];
        var correct_connections_2_28 = [
            {
                "source": "ld2",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld2"
            }

        ];
        var correct_connections_3_29 = [
            {
                "source": "ld3",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld3"
            }
        ];
        var correct_connections_4_30 = [
            {
                "source": "ld4",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld4"
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
                "source": "ld27",
                "target": "ld1"
            },

            {
                "source": "ld2",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld2"
            },

            {
                "source": "ld3",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld3"
            },

            {
                "source": "ld4",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld4"
            }

        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_17_8 = false;
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
        var is_connected_2_28 = false;
        var is_connected_3_29 = false;
        var is_connected_4_30 = false;

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_17_8) {
                is_connected_17_8 = correct_connections_17_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_8_9) {
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_10_15) {
                is_connected_10_15 = correct_connections_10_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_16_24) {
                is_connected_16_24 = correct_connections_16_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_19_12) {
                is_connected_19_12 = correct_connections_19_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_12_13) {
                is_connected_12_13 = correct_connections_12_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_14_22) {
                is_connected_14_22 = correct_connections_14_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_23_26) {
                is_connected_23_26 = correct_connections_23_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_18_20) {
                is_connected_18_20 = correct_connections_18_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_21_25) {
                is_connected_21_25 = correct_connections_21_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_7_20) {
                is_connected_7_20 = correct_connections_7_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_11_20) {
                is_connected_11_20 = correct_connections_11_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_5_17) {
                is_connected_5_17 = correct_connections_5_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_6_18) {
                is_connected_6_18 = correct_connections_6_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_1_27) {
                is_connected_1_27 = correct_connections_1_27.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_2_28) {
                is_connected_2_28 = correct_connections_2_28.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_3_29) {
                is_connected_3_29 = correct_connections_3_29.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_4_30) {
                is_connected_4_30 = correct_connections_4_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });

        if (is_connected_17_8 && is_connected_8_9 && is_connected_10_15 && is_connected_16_24 && is_connected_19_12 && is_connected_12_13 && is_connected_14_22
            && is_connected_23_26 && is_connected_18_20 && is_connected_21_25 && is_connected_7_20 && is_connected_11_20 && is_connected_5_17
            && is_connected_6_18 && is_connected_1_27 && is_connected_2_28 && is_connected_3_29 && is_connected_4_30 && !unallowed_connection_present) {
            alert("Correct Connections");
            rightconnection = true;

            jsPlumb.ready(function () {
                var instance
                var endpoints = [endpoint1, endpoint2, endpoint3, endpoint4, endpoint5, endpoint6, endpoint7, endpoint8, endpoint9, endpoint10, endpoint11, endpoint12, endpoint13, endpoint14, endpoint15, endpoint16,
                    endpoint17, endpoint18, endpoint19, endpoint20, endpoint21, endpoint22, endpoint23, endpoint24, endpoint25, endpoint26, endpoint27, endpoint28, endpoint29, endpoint30]
                var Prepares = [prepare1, prepare2, prepare3, prepare4, prepare5, prepare6, prepare7, prepare8, prepare9, prepare10, prepare11, prepare12, prepare13, prepare14, prepare15, prepare16,
                    prepare17, prepare18, prepare19, prepare20, prepare21, prepare22, prepare23, prepare24, prepare25, prepare26, prepare27, prepare28, prepare29, prepare30]
                endpoints = {
                    anchor: [0.5, 0.5, 0, -1],
                    isSource: true,
                    maxConnections: 0,
                    isTarget: true,
                },
                    Prepares = function (elId) {
                        initAnimation(elId);
                        return instance.addEndpoint(elId, endpoints);
                    },

                    instance = jsPlumb.getInstance({
                        DragOptions: { cursor: 'wait', zIndex: 20 },
                        Connector: ["Bezier", { curviness: -60 }],
                        Container: "canvas"
                    });

                instance.batch(function () {
                    e1 = Prepares("ld1"), e2 = Prepares("ld2"), e3 = Prepares("ld3"), e4 = Prepares("ld4"), e5 = Prepares("ld5"), e6 = Prepares("ld6"),
                    e7 = Prepares("ld7"), e8 = Prepares("ld8"), e9 = Prepares("ld9"), e10 = Prepares("ld10"), e11 = Prepares("ld11"), e12 = Prepares("ld12"),
                    e13 = Prepares("ld13"), e14 = Prepares("ld14"), e15 = Prepares("ld15"), e16 = Prepares("ld16"), e17 = Prepares("ld17"), e18 = Prepares("ld18")
                    e19 = Prepares("ld19"), e20 = Prepares("ld20"), e21 = Prepares("ld21"), e22 = Prepares("ld22"), e23 = Prepares("ld23"), e24 = Prepares("ld24")
                    e25 = Prepares("ld25"), e26 = Prepares("ld26"), e27 = Prepares("ld27"), e28 = Prepares("ld28"), e29 = Prepares("ld29"), e30 = Prepares("ld30")

                });

            })

            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");

            document.getElementById('dis1').style.pointerEvents = "none";
            document.getElementById('dis2').style.pointerEvents = "none";
            document.getElementById('dis3').style.pointerEvents = "none";
            document.getElementById('dis4').style.pointerEvents = "none";
            document.getElementById('dis5').style.pointerEvents = "none";
            document.getElementById('dis6').style.pointerEvents = "none";
            document.getElementById('dis7').style.pointerEvents = "none";
            document.getElementById('dis8').style.pointerEvents = "none";
            document.getElementById('dis9').style.pointerEvents = "none";
            document.getElementById('dis10').style.pointerEvents = "none";
            document.getElementById('dis11').style.pointerEvents = "none";
            document.getElementById('dis12').style.pointerEvents = "none";
            document.getElementById('dis13').style.pointerEvents = "none";
            document.getElementById('dis14').style.pointerEvents = "none";
            document.getElementById('dis15').style.pointerEvents = "none";
            document.getElementById('dis16').style.pointerEvents = "none";
            document.getElementById('dis17').style.pointerEvents = "none";
            document.getElementById('dis18').style.pointerEvents = "none";
            document.getElementById('dis19').style.pointerEvents = "none";
            document.getElementById('dis20').style.pointerEvents = "none";
            document.getElementById('dis21').style.pointerEvents = "none";
            document.getElementById('dis22').style.pointerEvents = "none";
            document.getElementById('dis23').style.pointerEvents = "none";
            document.getElementById('dis24').style.pointerEvents = "none";
            document.getElementById('dis25').style.pointerEvents = "none";
            document.getElementById('dis26').style.pointerEvents = "none";
            document.getElementById('dis27').style.pointerEvents = "none";
            document.getElementById('dis28').style.pointerEvents = "none";
            document.getElementById('dis29').style.pointerEvents = "none";
            document.getElementById('dis30').style.pointerEvents = "none";
            

            return;
        }
        else if (!unallowed_connection_present) {
            alert("Please Complete the connection");
        }
        else {
            alert("Wrong Connection");
            return;
        }
    });
});


//Scripting of mcb begins

var mcboffstate = true;
var were = 240;
function mcbonoff() {
    if (rightconnection == false) {
        alert("Alert ! Please Complete the connection first.");
    }
    else {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('select_1').disabled = false;
            document.getElementById('mcbb').src = 'images/mcb2.png';

        }
    }
}

//Scripting of mcb ends

var attcounter = 1;
var readings = true;
var current_readings = 0;
function addtotable() {
    if (mcboffstate == true) {
        alert("Alert! Please on mcb first");
    }
    if (current_readings != this.value) {
        current_readings = this.value;
        readings = true;
    }
    if (readings) {
        if (attcounter < 5) {
     if (this.value == 1) {

        var currentVal1 = attcounter++;
        var currentVal2 = 175;
        var currentVal3 = 2;
        var currentVal4 = 2;
        var currentVal5 = 2;
        var currentVal6 = 320;
        var currentVal7 = 280;
        var currentVal8 = 600;
        var currentVal9 = 606.21;
        var currentVal10 = -1;

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
        td1.innerHTML = currentVal1;
        td2.innerHTML = currentVal2;
        td3.innerHTML = currentVal3;
        td4.innerHTML = currentVal4;
        td5.innerHTML = currentVal5;
        td6.innerHTML = currentVal6;
        td7.innerHTML = currentVal7;
        td8.innerHTML = currentVal8;
        td9.innerHTML = currentVal9;
        td10.innerHTML = currentVal10;
        document.getElementById("tb1").appendChild(tr);
        readings = false;
    }
    else if (this.value == 2) {

        var currentVal1 = attcounter++;
        var currentVal2 = 185;
        var currentVal3 = 2.1;
        var currentVal4 = 2.1;
        var currentVal5 = 2.1;
        var currentVal6 = 335;
        var currentVal7 = 347;
        var currentVal8 = 682;
        var currentVal9 = 672.90;
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
        td1.innerHTML = currentVal1;
        td2.innerHTML = currentVal2;
        td3.innerHTML = currentVal3;
        td4.innerHTML = currentVal4;
        td5.innerHTML = currentVal5;
        td6.innerHTML = currentVal6;
        td7.innerHTML = currentVal7;
        td8.innerHTML = currentVal8;
        td9.innerHTML = currentVal9;
        td10.innerHTML = currentVal10;
        document.getElementById("tb1").appendChild(tr);
        readings = false;
    }
    else if (this.value == 3) {

        var currentVal1 = attcounter++;
        var currentVal2 = 195;
        var currentVal3 = 2.23;
        var currentVal4 = 2.23;
        var currentVal5 = 2.23;
        var currentVal6 = 370;
        var currentVal7 = 390;
        var currentVal8 = 760;
        var currentVal9 = 753.18;
        var currentVal10 = 0.89;

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
        td1.innerHTML = currentVal1;
        td2.innerHTML = currentVal2;
        td3.innerHTML = currentVal3;
        td4.innerHTML = currentVal4;
        td5.innerHTML = currentVal5;
        td6.innerHTML = currentVal6;
        td7.innerHTML = currentVal7;
        td8.innerHTML = currentVal8;
        td9.innerHTML = currentVal9;
        td10.innerHTML = currentVal10;
        document.getElementById("tb1").appendChild(tr);
        readings = false;
    }
    else if (this.value == 4) {

        var currentVal1 = attcounter++;
        var currentVal2 = 205;
        var currentVal3 = 2.34;
        var currentVal4 = 2.34;
        var currentVal5 = 2.34;
        var currentVal6 = 410;
        var currentVal7 = 430;
        var currentVal8 = 840;
        var currentVal9 = 830.86;
        var currentVal10 = 1.08;

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
        td1.innerHTML = currentVal1;
        td2.innerHTML = currentVal2;
        td3.innerHTML = currentVal3;
        td4.innerHTML = currentVal4;
        td5.innerHTML = currentVal5;
        td6.innerHTML = currentVal6;
        td7.innerHTML = currentVal7;
        td8.innerHTML = currentVal8;
        td9.innerHTML = currentVal9;
        td10.innerHTML = currentVal10;
        document.getElementById("tb1").appendChild(tr);
        readings = false;
    }
}

    else {
        alert("You can add maximum four readings in the table.")
    }
    }

}



//Scrypting of table ends

//Scryting of variation of bulbs begins

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function () {
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
var rangeClock1 = document.querySelector('#needle1');
var rangeClock2 = document.querySelector('#needle2');
var rangeClock3 = document.querySelector('#needle3');
var rangeClock4 = document.querySelector('#needle4');
var rangeClock5 = document.querySelector('#needle5');
var rangeClock6 = document.querySelector('#needle6');


function rangeChange1() {
    rangeClock1.style.transform = 'rotate(-5.6deg)';
    rangeClock2.style.transform = 'rotateZ(-10deg)';
    rangeClock3.style.transform = 'rotate(-34.3deg)';
    rangeClock4.style.transform = 'rotate(2.3deg)';
    rangeClock5.style.transform = 'rotate(2deg)';
    rangeClock6.style.transform = 'rotate(2deg)';
}
function rangeChange2() {
    rangeClock1.style.transform = 'rotate(-3deg)';
    rangeClock2.style.transform = 'rotateZ(-8.4deg)';
    rangeClock3.style.transform = 'rotate(-29.9deg)';

    rangeClock4.style.transform = 'rotate(4.3deg)';
    rangeClock5.style.transform = 'rotate(4deg)';
    rangeClock6.style.transform = 'rotate(4deg)';


}
function rangeChange3() {
    rangeClock1.style.transform = 'rotate(-0.5deg)';
    rangeClock2.style.transform = 'rotateZ(-3deg)';
    rangeClock3.style.transform = 'rotate(-27deg)';
    rangeClock4.style.transform = 'rotate(7.2deg)';
    rangeClock5.style.transform = 'rotate(6.7deg)';
    rangeClock6.style.transform = 'rotate(6.7deg)';
}
function rangeChange4() {
    rangeClock1.style.transform = 'rotate(2deg)';
    rangeClock2.style.transform = 'rotateZ(2deg)';
    rangeClock3.style.transform = 'rotate(-23.6deg)';
    rangeClock4.style.transform = 'rotate(10.7deg)';
    rangeClock5.style.transform = 'rotate(10deg)';
    rangeClock6.style.transform = 'rotate(10deg)';
}


//Scripting of needle range ends

//Scripting of transformer range begins
var range90 = document.querySelector('#knob');
function range901() {
    range90.style.transform = 'rotate(130deg)';
}
function range902() {
    range90.style.transform = 'rotate(135deg)';
}
function range903() {
    range90.style.transform = 'rotate(140deg)';
}
function range904() {
    range90.style.transform = 'rotate(155deg)';
}

//Scripting of transformer range ends
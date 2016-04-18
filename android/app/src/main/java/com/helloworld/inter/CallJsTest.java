package com.helloworld.inter;

/**
 * Created by hunt on 16-4-18.
 */
public class CallJsTest {

//    private ScriptEngine se;
//
//    // Constructor, sets up React and the Component
//    public CallJsTest() throws Throwable {
//        ScriptEngineManager sem = new ScriptEngineManager();
//        se = sem.getEngineByName("nashorn");
//        // React depends on the "global" variable
//        se.eval("var global = this");
//        // eval react.js
//        se.eval(new FileReader("node_modules/react/dist/react.js"));
//        // This would also be an external JS file
//        String component =
//                "var MyComponent = React.createClass({" +
//                        "	render: function() {" +
//                        "		return React.DOM.div(null, this.props.text)" +
//                        "	}" +
//                        "});";
//        se.eval(component);
//    }
//
//    // Render the component, which can be called multiple times
//    public void render(String text) throws Throwable {
//        String render =
//                "React.renderToString(React.createFactory(MyComponent)({" +
//                        // using JSONObject here would be cleaner obviosuly
//                        "	text: '" + text + "'" +
//                        "}))";
//        System.out.println(se.eval(render));
//    }
//
//    public static void main(String... args) throws Throwable {
//        CallJsTest test = new CallJsTest();
//        test.render("hello");
//        test.render("hello world");
//    }
}

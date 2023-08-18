"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[45],{98795:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return u}});var t,i=n(87462),o=n(63366),s=(n(15007),n(64983)),r=n(91515),d=["components"],l={},m=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),c={_frontmatter:l},p=r.Z;function u(e){var a=e.components,n=(0,o.Z)(e,d);return(0,s.mdx)(p,(0,i.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"logging-and-troubleshooting"},"Logging and troubleshooting"),(0,s.mdx)("p",null,"Adobe Developer App Builder offers different options to facilitate logging from code and for viewing and forwarding applications logs as needed. You can opt for the default setting, which involves retrieving logs directly from the IO Runtime, or you can forward them to other destinations like Splunk or Azure Log Analytics. This topic describes implementing the default option and forwarding to Splunk."),(0,s.mdx)("h2",{id:"adobe-io-runtime-default"},"Adobe I/O Runtime (default)"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/overview/entities/"},"Actions")," are serverless functions that run on Adobe I/O Runtime. In general, an action is invoked in response to an event and produces some observable output. An Adobe Commerce event must work successfully for its resulting Runtime Action to be successful. Make sure to troubleshoot both of these entities when diagnosing issues with your application. The following tips and comprehensive comparison enable you to make informed decisions about your Logging approach."),(0,s.mdx)("p",null,"When building and troubleshooting your application, it is important to understand the differences between events and runtime actions. These concepts are often interrelated, with events triggering runtime actions, but the actual functionality and logging capabilities are separate entities. Best practice is to determine whether the event delivery was successful, and then investigate any resulting runtime actions."),(0,s.mdx)("h3",{id:"set-the-log-level"},"Set the log level"),(0,s.mdx)("p",null,"You can configure the log level per action in your ",(0,s.mdx)("inlineCode",{parentName:"p"},"ext.config.yml")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"app.config.yml")," file, as follows:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-yaml"},"<action_name>:\n  inputs:\n    LOG_LEVEL: <error|warn|info|verbose|debug|silly>\n")),(0,s.mdx)("h3",{id:"view-logs"},"View logs"),(0,s.mdx)("p",null,"To view logs in real time, run the following command:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"aio rt logs --tail\n")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-terminal"},'283976-asctestamina-stage/amazon-app/scheduled-amazon-sync-products:e7e5281de72049d3a5281de720c9d3c7\n2023-07-18T10:27:05.585Z       stdout: 2023-07-18T10:27:05.585Z [main /283976-asctestamina-stage/amazon-app/scheduled-amazon-sync-products] info: {"message":"Start retrieving Amazon product updates","params":{}}\n')),(0,s.mdx)("p",null,"Sometimes logs do not appear, like web action logs or small random hiccups. In such a case, you can use the activation ID to get specific logs for that action. When an action is invoked, it produces an activation record that contains information about this invocation, including ",(0,s.mdx)("inlineCode",{parentName:"p"},"activationId"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"statusCode"),", logs, and more. By default, activations have a 7-day time to live (TTL). Activation IDs are an excellent resource to key on for debugging internally and should be provided in the description of support issues around runtime actions.  The OpenWhisk documentation describes the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/docs/actions.md#understanding-the-activation-record"},"full list activation properties"),"."),(0,s.mdx)("h4",{id:"get-logs-using-the-aio-cli"},"Get logs using the aio CLI"),(0,s.mdx)("p",null,"In this example, we are tailing our logs. We know that there is a scheduled runtime action named ",(0,s.mdx)("inlineCode",{parentName:"p"},"sync-orders")," that was executed, but its logs were never displayed. We must get its activation ID from the activation list and get the logs directly for that runtime action."),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Run the following command to return a list of runtime entities:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"aio rt activation list\n")),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-terminal"},"Datetime        Status    Kind      Version    Activation ID                    Start Wait  Init Duration Entity\n─────────────── ───────── ───────── ──────── ─ ──────────────────────────────── ───── ───── ──── ──────── ─────────────────────────────────────────────────────\n07/18 12:09:04  success   nodejs:18 0.0.10     2491e3f886264b2891e3f88626fb2820 cold  2289  727  1885ms   amazon-app/scheduled-amazon-sync-products\n07/18 12:09:02  success   trigger   0.0.9      4373d5bf7bcd4371b3d5bf7bcd937197 --    --    --   --       everyThreeMin\n07/18 12:06:05  success   nodejs:18 0.0.9      e3eda8a94b6f4bf3ada8a94b6f3bf3f6 cold  3230  664  1829ms   amazon-app/scheduled-amazon-sync-products\n07/18 12:06:02  success   trigger   0.0.8      ae2d87a5af6045f4ad87a5af6095f463 --    --    --   --       everyThreeMin\n07/18 12:03:04  success   nodejs:18 0.0.9      b2878be443c444ed878be443c444ed4d cold  2196  751  1788ms   amazon-app/scheduled-amazon-sync-products\n07/18 12:03:02  success   trigger   0.0.8      80639009d2184c9ca39009d2182c9ce8 --    --    --   --       everyThreeMin\n07/18 12:02:07  success   nodejs:18 0.0.9      fb491c0dd31e4d97891c0dd31ecd9730 cold  2216  702  1712ms   amazon-app/scheduled-amazon-sync-listing-improvements\n07/18 12:02:07  success   nodejs:18 0.0.9      b1a8bdbee4884974a8bdbee48869745e cold  2213  956  1236ms   amazon-app/scheduled-amazon-sync-orders\n07/18 12:02:05  success   trigger   0.0.8      d88d73a273ec40fb8d73a273ece0fb2d --    --    --   --       everyTenMin\n07/18 12:00:05  success   nodejs:18 0.0.9      00479a279a234cd7879a279a233cd799 cold  3264  573  2143ms   amazon-app/scheduled-amazon-sync-products\n07/18 12:00:02  success   trigger   0.0.8      0d3466d142a64a5ab466d142a67a5a8e --    --    --   --       everyThreeMin\n07/18 11:57:05  success   nodejs:18 0.0.9      eb13ee8b00434b5f93ee8b0043fb5f61 cold  3215  589  1581ms   amazon-app/scheduled-amazon-sync-products\n07/18 11:57:02  success   trigger   0.0.8      75088e55df85453c888e55df85e53ca3 --    --    --   --       everyThreeMin\n07/18 11:54:04  success   nodejs:18 0.0.9      3eb429d46e0c45ceb429d46e0c25ce67 cold  2195  695  1693ms   amazon-app/scheduled-amazon-sync-products\n07/18 11:54:02  success   trigger   0.0.8      23c2b9e6188c404d82b9e6188c904de4 --    --    --   --       everyThreeMin\n07/18 11:52:15  success   nodejs:18 0.0.9      bf54aa75b6294fd994aa75b629dfd91d cold  10410 626  1560ms   amazon-app/scheduled-amazon-sync-listing-improvements\n07/18 11:52:07  success   nodejs:18 0.0.9      fcf0e0153d59409db0e0153d59809d36 cold  2208  1404 1738ms   amazon-app/scheduled-amazon-sync-orders\n07/18 11:52:05  success   trigger   0.0.8      cd54ae8d9b46472f94ae8d9b46e72f71 --    --    --   --       everyTenMin\n07/18 11:51:04  success   nodejs:18 0.0.9      1659c848908840bf99c8489088d0bf1b cold  2207  586  1570ms   amazon-app/scheduled-amazon-sync-products\n07/18 11:51:02  success   trigger   0.0.8      c1327a57f2734b91b27a57f2737b91c1 --    --    --   --       everyThreeMin\n07/18 11:48:04  success   nodejs:18 0.0.9      c0c5a3ceb6c4424585a3ceb6c4a24570 cold  2195  941  1927ms   amazon-app/scheduled-amazon-sync-products\n07/18 11:48:02  success   trigger   0.0.8      047760cb71314236b760cb713172362a --    --    --   --       everyThreeMin\n07/18 11:45:04  success   nodejs:18 0.0.9      86e59628804f4d15a59628804fed15e2 cold  2194  915  1936ms   amazon-app/scheduled-amazon-sync-products\n07/18 11:45:02  success   trigger   0.0.8      fe014774ee084ce2814774ee08ace245 --    --    --   --       everyThreeMin\n07/18 11:42:08  success   nodejs:18 0.0.9      5641f4fb9ae84ea281f4fb9ae8eea297 cold  3264  585  2594ms   amazon-app/scheduled-amazon-sync-listing-improvements\n07/18 11:42:08  success   nodejs:18 0.0.9      91e748ccdf5246f1a748ccdf52b6f10c cold  3238  621  939ms    amazon-app/scheduled-amazon-sync-orders\n07/18 11:42:05  success   trigger   0.0.8      e31c7d64b37a4ac49c7d64b37adac485 --    --    --   --       everyTenMin\n07/18 11:42:04  success   nodejs:18 0.0.9      ba601e7a82c741b2a01e7a82c771b2ea cold  2197  578  1574ms   amazon-app/scheduled-amazon-sync-products\n07/18 11:42:02  success   trigger   0.0.8      575a91cfd9a044169a91cfd9a0b416e4 --    --    --   --       everyThreeMin\n07/18 11:41:26  app error nodejs:18 0.0.9      1a5bc097961647cb9bc097961677cb0b cold  432   647  658ms    amazon-app/amazon-get-sales\n"))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Specify the activation ID to return a list of applicable log updates."),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"aio rt logs <activation ID>\n")),(0,s.mdx)("p",{parentName:"li"},"For example, ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio rt logs b1a8bdbee4884974a8bdbee48869745e")," returns the following:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-terminal"},'=== activation logs b1a8bdbee4884974a8bdbee48869745e\n2023-07-18T10:02:08.375Z       stdout: 2023-07-18T10:02:08.375Z [main /283976-asctestamina-stage/amazon-app/scheduled-amazon-sync-orders] info: {"message":"Sync orders from Amazon into Adobe Commerce","params":{}}\n2023-07-18T10:02:08.649Z       stdout: 2023-07-18T10:02:08.649Z [main /283976-asctestamina-stage/amazon-app/scheduled-amazon-sync-orders] info: {"message":"Synced account orders","params":{}}\n')),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("strong",{parentName:"p"},"Note:")," If you have installed the ",(0,s.mdx)("inlineCode",{parentName:"p"},"watch")," command, you can run the ",(0,s.mdx)("inlineCode",{parentName:"p"},"watch -n2 aio rt activation list")," to refresh the activation list every two seconds."))),(0,s.mdx)("h4",{id:"get-the-activation-id-from-a-response-header"},"Get the activation ID from a response header"),(0,s.mdx)("p",null,"You can also get the activation ID from the ",(0,s.mdx)("inlineCode",{parentName:"p"},"X-Openwhisk-Action-Id")," response header from a web action."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/5530d/response-header.webp 320w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/0c8fb/response-header.webp 640w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/94b1e/response-header.webp 1280w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/0b34d/response-header.webp 1920w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/507e6/response-header.webp 2498w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/dd4a7/response-header.png 320w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/0f09e/response-header.png 640w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/bbbf7/response-header.png 1280w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/ac7a9/response-header.png 1920w","/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/7f319/response-header.png 2498w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/d0095409a43768207e68e31dc81812be/bbbf7/response-header.png",alt:"X-Openwhisk-Action-Id response header",title:"X-Openwhisk-Action-Id response header",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"With this value, you can now run the ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio rt logs <activation ID>")," command."),(0,s.mdx)("h2",{id:"event-logs"},"Event logs"),(0,s.mdx)("p",null,"Event logs allow you to see details about the events received in your project."),(0,s.mdx)("p",null,"For webhook event registrations, use ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/events/docs/support/tracing/"},"Debug Tracing"),". This feature enables the developers to monitor attempts by I/O Events to deliver events to their webhook consumer applications. This feature helps in debugging issues with event registrations and also comes in handy while setting up an event-registration from scratch."),(0,s.mdx)("p",null,"You can see the logs generated by a webhook event by visiting your Adobe Developer ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/"},"console")," and selecting your project > your workspace > the event name > ",(0,s.mdx)("strong",{parentName:"p"},"Debug Tracing"),". This section displays all the events received. Each event shows the request and response. The activation ID and the logs for the specific action are also available. In the case of brand new event registrations, hitting refresh should enable this tab. Debug Tracing is only available for event registrations where the webhook option is selected."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1252px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/5530d/debug-tracing.webp 320w","/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/0c8fb/debug-tracing.webp 640w","/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/85556/debug-tracing.webp 1252w"],sizes:"(max-width: 1252px) 100vw, 1252px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/dd4a7/debug-tracing.png 320w","/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/0f09e/debug-tracing.png 640w","/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/4c530/debug-tracing.png 1252w"],sizes:"(max-width: 1252px) 100vw, 1252px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/e1e158141797527e4d3deeab52cffe53/4c530/debug-tracing.png",alt:"Debug tracing",title:"Debug tracing",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"When forwarding logs is configured, it's possible that some logs cannot be displayed, or they could be displayed with a delay (observed from a few seconds to 10 minutes)."),(0,s.mdx)("h2",{id:"log-forwarding-to-splunk"},"Log forwarding to Splunk"),(0,s.mdx)("p",null,"Run the following ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio")," command to configure log-forwarding to Splunk in your project/workspace. Follow the prompts to assign the host, port, index, and Splunk HEC token:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app config set log-forwarding --verbose\n? select log forwarding destination Splunk HEC\n? host <INSERT_HOST>\n? port <INSERT_PORT>\n? index <INSERT_INDEX>\n? hec_token [hidden]\n")),(0,s.mdx)("p",null,"If you make a mistake in any of these fields, the command returns a 400 (Bad Request) response."),(0,s.mdx)("p",null,"Upon success, your ",(0,s.mdx)("inlineCode",{parentName:"p"},".aio")," file should be populated with the log forwarding data."),(0,s.mdx)("p",null,"If the command is successful, but you cannot see any log in Splunk, run the following command to troubleshoot:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app config get log-forwarding errors\n")),(0,s.mdx)("h2",{id:"splunk-logging-vs-io-runtime-logging"},"Splunk logging vs IO Runtime logging"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/application_logging/#when-to-use-log-forwarding"},"Managing Application Logs")," can help you decide which logging works best for your use case."),(0,s.mdx)("h3",{id:"log-display-time"},"Log display time"),(0,s.mdx)("p",null,"Understand how much time the messages need to be displayed since they were logged."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Runtime action type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Without log forwarding"),(0,s.mdx)("th",{parentName:"tr",align:null},"With log forwarding"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Event listener"),(0,s.mdx)("td",{parentName:"tr",align:null},"Almost instantly"),(0,s.mdx)("td",{parentName:"tr",align:null},"Almost instantly")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Scheduled"),(0,s.mdx)("td",{parentName:"tr",align:null},"Almost instantly but a bit flaky"),(0,s.mdx)("td",{parentName:"tr",align:null},"Almost instantly")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Web"),(0,s.mdx)("td",{parentName:"tr",align:null},"Only accessible using the activation id"),(0,s.mdx)("td",{parentName:"tr",align:null},"Almost instantly")))),(0,s.mdx)("h3",{id:"display-activation-logs"},"Display activation logs"),(0,s.mdx)("p",null,"The type of runtime action determines whether logs are displayed. The logs for scheduled actions are always displayed. For event listener and web actions, success and failure logs are displayed when forwarding is enabled. If forwarding is not enabled, failure logs are displayed, but not success logs."),(0,s.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.mdx)("p",null,"Debugging the React app locally poses no issues, as running the application allows for immediate visibility of any changes made. Debugging in this context can be facilitated through the use of the ",(0,s.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/console.html"},"console module")," inside your web-src components and the inspection of browser."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"console.log('Here your message');\n")),(0,s.mdx)("p",null,"Logs are displayed as follows:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"644px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.062500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/5530d/display-log.webp 320w","/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/0c8fb/display-log.webp 640w","/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/ce8f6/display-log.webp 644w"],sizes:"(max-width: 644px) 100vw, 644px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/dd4a7/display-log.png 320w","/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/0f09e/display-log.png 640w","/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/e8cbb/display-log.png 644w"],sizes:"(max-width: 644px) 100vw, 644px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/60fdefe787077644a01de9995e109afa/e8cbb/display-log.png",alt:"Log display",title:"Log display",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"However, when it comes to debugging actions, there are two alternatives available. The first option involves using Docker to debug by running the action on your local machine. Alternatively, you can deploy the actions to I/O Runtime and use logs for debugging purposes."),(0,s.mdx)("h3",{id:"debugging-actions-locally-with-docker"},"Debugging actions locally with Docker"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/resources/debugging/"},"Debugging App Builder Apps")," codelab describes the debugging process in detail. As you work through that codelab, keep in mind that the ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app run --local")," command that allows you to run actions in the local container is not supported in NodeJS 18."),(0,s.mdx)("p",null,"To perform ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/using/debugging/"},"advanced debugging")," for ",(0,s.mdx)("inlineCode",{parentName:"p"},"node.js")," actions, use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"wskdebug")," command to forward actions from the OpenWhisk system to a local container. Based on testing conducted with various versions of both packages and two different versions of Node.js, the following information outlines the current support status:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"wskdebug --inspect-brk=11932 <action_name> <path_action_name.js> -l -v\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@adobe/wskdebug 1.1.3")," ","✅"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@openwhisk/wskdebug 1.2.0")," ","✅"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@openwhisk/wskdebug 1.3.0")," ","❌"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@openwhisk/wskdebug 1.4.0")," ","❌")),(0,s.mdx)("p",null,"The error returned from the last two versions is:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"FetchError: request to http://0.0.0.0:53362/init failed, reason: connect ECONNREFUSED 0.0.0.0:53362")),(0,s.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"If you encounter any issues, check the ",(0,s.mdx)("inlineCode",{parentName:"p"},"openwhisk")," local log file (",(0,s.mdx)("inlineCode",{parentName:"p"},"openwhisk-local.log.txt"),"), which should be inside the ",(0,s.mdx)("inlineCode",{parentName:"p"},"dist")," folder in your project."),(0,s.mdx)("h3",{id:"limitations-and-known-issues"},"Limitations and known issues"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"You cannot use ",(0,s.mdx)("inlineCode",{parentName:"p"},"wskdebug")," to debug your actions if you are using ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio-lib-state")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio-lib-files"),". See ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/common_troubleshooting/#debugging-errors-with-state-and-files-sdk"},"common issues"),".")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Breakpoints might not pause when debugging an action. ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/asset-compute/troubleshooting.html?lang=en#debug"},"Troubleshoot Asset Compute extensibility")," provides more information.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app run --local")," command does not work with Nodejs18, Currently, only Nodejs16 is supported.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"You cannot run your application with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"--local flag")," in any of the following cases:"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"The limits/timeout configured in your ",(0,s.mdx)("inlineCode",{parentName:"p"},"app.config.yml")," file are higher than 300000 ms. Setting the value too high causes the following error:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-text"},'›   Error: PUT http://localhost:3233/api/v1/namespaces/guest/actions/amazon-app/scheduled-amazon-sync-products Returned HTTP 400 (Bad Request) --\x3e "The request content was malformed:\n›   requirement failed: duration 400000 milliseconds exceeds allowed threshold of 300000 milliseconds"\n'))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"You have a dependency on the ",(0,s.mdx)("inlineCode",{parentName:"p"},"lib-state")," storage library, which causes the following error:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-text"},'"code": "ERROR_BAD_ARGUMENT",\n"message": "[TvmLib:ERROR_BAD_ARGUMENT] ow.auth" is required"\n"stacktrace": "TvmLibError: [TvmLib:ERROR_BAD_ARGUMENT] "ow.auth" is required\n'))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"You have triggers (scheduled runtime actions) configured. This will show the following error:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"Error: POST http://localhost:3233/api/v1/namespaces/whisk.system/actions/alarms/interval Returned HTTP 403 (Forbidden) --\x3e \"The supplied authentication is not authorized to access 'whisk.system/alarms'.\"\n")))))),(0,s.mdx)("h3",{id:"timeout-issues"},"Timeout issues"),(0,s.mdx)("p",null,"Based on the development team's experience developing Amazon Sales Channel app, a 503 error may occur when an action exceeds its allotted time. However, this error message may not always provide sufficient information, especially when the action is invoked from a React UI. In such cases, it is recommended to investigate further using the activation ID to gain more insights. If the result obtained from activation ID indicates a timeout error, it will typically display a message such as:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "The action exceeded its time limits of 60000 milliseconds."\n}\n')),(0,s.mdx)("p",null,"In such instances, investigate the root cause of the timeout error, which could potentially be due to a slow response from an external API. If so, you might consider reviewing the specific API call that is taking excessive time. Additionally, adjusting the timeout duration for your action may be a solution. Note that the maximum allowable timeout for a blocking action is set at 60 seconds."),(0,s.mdx)("h2",{id:"additional-tips"},"Additional tips"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"When a new log forwarding configuration is set to an existing destination, it overwrites the previous configuration but does not remove any logs previously sent there. When the destination of the logs is changed (for example from Splunk back to Adobe I/O Runtime), logs previously sent to Splunk are not removed. And when setting forwarding back to Splunk once again, the previous logs are not reset or removed.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Once you start forwarding logs to Splunk HEC, running the ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio rt logs")," command will return the following warning:"),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("inlineCode",{parentName:"p"},"Namespace is configured with custom log forwarding destination: 'splunk_hec'. Please use corresponding logging platform to view logs"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"If you receive the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Too many debug requests in the last minute")," error, consider disabling the ",(0,s.mdx)("inlineCode",{parentName:"p"},"'X-OW-EXTRA-LOGGING': 'on'")," header in your runtime action. This setting activates throttling to your App Builder application, and some requests will be denied. Use log-forwarding to reduce the number of messages being logged instead."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-amazon-sales-channel-best-practices-logging-troubleshooting-md-a066779ec7d9c95cd03b.js.map
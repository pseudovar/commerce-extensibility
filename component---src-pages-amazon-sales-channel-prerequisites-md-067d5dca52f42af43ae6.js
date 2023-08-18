"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[906],{75505:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return s}});var n=t(87462),o=t(63366),r=(t(15007),t(64983)),l=t(91515),m=["components"],d={},p={_frontmatter:d},i=l.Z;function s(e){var a=e.components,t=(0,o.Z)(e,m);return(0,r.mdx)(i,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"This topic describes how to set up your local development environment so that you can install the Adobe Sales Channel reference app."),(0,r.mdx)("p",null,"You must install ",(0,r.mdx)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"nodeJS 16.13+")," as your JavaScript runtime."),(0,r.mdx)("h2",{id:"adobe-commerce"},"Adobe Commerce"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"(Required) Adobe Commerce 2.4.5+"),(0,r.mdx)("li",{parentName:"ul"},"(Optional) ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/extensibility/admin-ui-sdk/"},"Adobe Commerce Admin UI SDK")," enables you to attach the App Builder application to the Adobe Commerce Admin.")),(0,r.mdx)("p",null,"In addition to these software requirements, you must have access to the Commerce environment from an external network. You must also have the ability to add API integrations."),(0,r.mdx)("h3",{id:"create-custom-attributes"},"Create custom attributes"),(0,r.mdx)("p",null,"To subscribe to catalog update events from Adobe Commerce, you must create the following custom attributes in ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,r.mdx)("strong",{parentName:"p"},"Attributes")," > ",(0,r.mdx)("strong",{parentName:"p"},"Product")," > ",(0,r.mdx)("strong",{parentName:"p"},"Add New Attribute"),":"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Default label"),(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute Code"),(0,r.mdx)("th",{parentName:"tr",align:null},"Scope"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"ASIN"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"asin")),(0,r.mdx)("td",{parentName:"tr",align:null},"Global"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Amazon Condition"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"amazon_condition")),(0,r.mdx)("td",{parentName:"tr",align:null},"Global"),(0,r.mdx)("td",{parentName:"tr",align:null},"Condition of the listing item. The ",(0,r.mdx)("a",{parentName:"td",href:"https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-reference#conditiontype"},"Amazon docs")," list the possible values.")))),(0,r.mdx)("h3",{id:"subscribe-to-catalog-update-events"},"Subscribe to catalog update events"),(0,r.mdx)("p",null,"Use the following steps to configure Commerce and subscribe to catalog update events. The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/events/get-started/configure-commerce/"},(0,r.mdx)("em",{parentName:"a"},"Getting started with Adobe I/O Events for Adobe Commerce"))," guide provides additional context."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Register your Commerce instance as an event provider. See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/events/get-started/configure-commerce/"},"Configure Adobe Commerce")," for details.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"After you have configured your instance and the event provider is created, use the following command to subscribe to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:subscribe observer.catalog_product_save_after --fields=sku --fields=price --fields=stock_data.qty --fields=asin --fields=amazon_condition --fields=name\n")))),(0,r.mdx)("h2",{id:"adobe-developer-console"},"Adobe Developer Console"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/getting-started/"},"Adobe Developer Console")," allows you to create projects and begin your development journey. Create a project and make sure that you have access to the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/runtime/docs/"},"Adobe IO Runtime")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/runtime/docs/"},"Adobe IO Events"))),(0,r.mdx)("h3",{id:"adobe-io-cli"},"Adobe I/O CLI"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/tools/cli_install"},"Adobe I/O CLI")," allows you to manage your projects and workspaces. Install this essential tool by following these steps:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"npm install -g @adobe/aio-cli")," to install Adobe I/O Extensible CLI.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio login")," to authenticate to the developer console.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio console org select")," to select your organization.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio console project select")," to select your project.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio console workspace select"),' and select "Stage" as your workspace.'))),(0,r.mdx)("p",null,"For more information, refer to ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli/blob/master/README.md"},"Adobe I/O CLI documentation"),"."),(0,r.mdx)("h3",{id:"adobe-developer-app-builder"},"Adobe Developer App Builder"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/overview/"},"Adobe Developer App Builder")," is a complete framework that enables enterprise developers to build and deploy custom web applications that extend Adobe Commerce and other Experience Cloud solutions and run on Adobe infrastructure."),(0,r.mdx)("p",null,"The following package needs to be installed locally to properly register events:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-extension"},"aio-cli-plugin-extension"))),(0,r.mdx)("p",null,"The following packages need to be installed locally to properly run your ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio")," with ",(0,r.mdx)("inlineCode",{parentName:"p"},"--local")," flag enabled:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.oracle.com/es/java/technologies/javase/jdk11-archive-downloads.html"},"Java 11 or higher")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://maven.apache.org/"},"Maven")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://docs.docker.com/desktop/"},"Docker"))),(0,r.mdx)("h2",{id:"amazon-sp-api"},"Amazon SP API"),(0,r.mdx)("p",null,"Amazon Sales Channel uses ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/amz-tools/amazon-sp-api"},"Amazon SP API")," to communicate with Amazon Seller Central."),(0,r.mdx)("p",null,"To properly configure Amazon SP API, you must have:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Admin access to ",(0,r.mdx)("a",{parentName:"li",href:"https://sellercentral.amazon.com/"},"Amazon Seller Central")),(0,r.mdx)("li",{parentName:"ul"},"Permissions to add Developer Applications")),(0,r.mdx)("p",null,"You must perform configuration tasks for Amazon Web Services and Amazon Seller Central."),(0,r.mdx)("h3",{id:"amazon-web-services"},"Amazon Web Services"),(0,r.mdx)("p",null,"Create an IAM policy per ",(0,r.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/creating-and-configuring-iam-policies-and-entities"},"Amazon SPI Guide"),"."),(0,r.mdx)("h3",{id:"amazon-seller-central"},"Amazon Seller Central"),(0,r.mdx)("p",null,"The app type of Amazon Sales Channel is ",(0,r.mdx)("strong",{parentName:"p"},"Private Seller"),". Specify this integration type when you configure your instance. See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/determine-app-type"},"Determine app type")," for more information."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/registering-as-a-developer#to-register-as-a-private-developer-for-private-seller-applications"},"Register yourself as a private developer"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/registering-your-application"},"Registering your Application"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/self-authorization"},"Self authorize")," your application to generate access keys."))),(0,r.mdx)("p",null,"When you create an account from the App Builder application UI, you will need the following set of Amazon credentials:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Where to get"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Client ID"),(0,r.mdx)("td",{parentName:"tr",align:null},"In ",(0,r.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com/marketplacedeveloper/applications"},"Developer Central"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Client secret"),(0,r.mdx)("td",{parentName:"tr",align:null},"In ",(0,r.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com/marketplacedeveloper/applications"},"Developer Central"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Client refresh token"),(0,r.mdx)("td",{parentName:"tr",align:null},"In ",(0,r.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com/marketplacedeveloper/applications"},"Developer Central")," > ",(0,r.mdx)("strong",{parentName:"td"},"Authorize"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"AWS access key"),(0,r.mdx)("td",{parentName:"tr",align:null},"In ",(0,r.mdx)("a",{parentName:"td",href:"https://aws.amazon.com/"},"AWS")," > ",(0,r.mdx)("strong",{parentName:"td"},"IAM")," > ",(0,r.mdx)("strong",{parentName:"td"},"User with access to IAM role"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"AWS secret access key"),(0,r.mdx)("td",{parentName:"tr",align:null},"In ",(0,r.mdx)("a",{parentName:"td",href:"https://aws.amazon.com/"},"AWS")," > ",(0,r.mdx)("strong",{parentName:"td"},"IAM")," > ",(0,r.mdx)("strong",{parentName:"td"},"User with access to IAM role"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"AWS Role ARN"),(0,r.mdx)("td",{parentName:"tr",align:null},"Create ",(0,r.mdx)("a",{parentName:"td",href:"https://aws.amazon.com/"},"AWS")," IAM role")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Target marketplace"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://developer-docs.amazon.com/sp-api/docs/marketplace-ids"},"ASC Marketplace IDs"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unique Seller ID"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com"},"Amazon Seller Central")," > ",(0,r.mdx)("strong",{parentName:"td"},"Account Info")," > ",(0,r.mdx)("strong",{parentName:"td"},"Merchant Token"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-amazon-sales-channel-prerequisites-md-067d5dca52f42af43ae6.js.map
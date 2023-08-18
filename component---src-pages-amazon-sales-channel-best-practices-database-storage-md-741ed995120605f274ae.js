"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[156],{10536:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var i=a(87462),n=a(63366),o=(a(15007),a(64983)),r=a(91515),s=["components"],l={},d={_frontmatter:l},m=r.Z;function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.mdx)(m,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"database-storage"},"Database storage"),(0,o.mdx)("p",null,"Adobe Developer App Builder is a cloud native framework that has storage capabilities for both long-term and short-term storage."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-files"},"Adobe I/O Files")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"Adobe I/O State")," libraries provide zero-config file and state caching for App Builder. The Adobe I/O State library is an npm module that provides a JavaScript abstraction on top of distributed/cloud databases with a simple key-value store state persistence API. The Adobe I/O Files library provides a JavaScript abstraction on top of cloud blob storage with a simple file-system like persistence API. Use the state library for storing and accessing small values and the files library for storing larger amounts of data."),(0,o.mdx)("h2",{id:"adobe-io-state-library"},"Adobe I/O State library"),(0,o.mdx)("p",null,"Implementing the Adobe I/O State library has its benefits and limitations."),(0,o.mdx)("h3",{id:"benefits"},"Benefits"),(0,o.mdx)("p",null,"The Amazon Sales Channel app requires joining the Adobe Commerce and Amazon Seller Partner models. Functionality within Amazon Sales Channel requires updating data on both sides. Therefore, it is essential to link models to both services."),(0,o.mdx)("p",null,"Attributes are one example where models must be linked. The development team defined an attribute model that could map data between Commerce and Amazon attributes. The model had the following requirements:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Persistence"),". The system must be able to track and sync the data on both sides as users pull in the latest values.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Fast response times"),". Reasonable load times on the frontend of the application are a requirement. These could not be achieved by directly querying both resources and mapping the data on the fly."))),(0,o.mdx)("p",null,"The throttling controls of Amazon's Selling Partner APIs significantly impact application performance. The development team attempted workarounds such as increasing period for repeated calls and investigating Amazon's webhooks functionality. However, the best technical solution was to leverage App Builder's storage capabilities."),(0,o.mdx)("h3",{id:"limitations"},"Limitations"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-state")," library has clear limitations both in practice and from the public documentation. A common misconception is that this library is a replacement for a traditional RDBMS/noSQL database. Instead, it has technical capabilities that are similar to Redis or other caching services. The library ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"README")," lists these limitations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Maximum state value size: 2MB"),(0,o.mdx)("li",{parentName:"ul"},"Maximum state key size: 1024 bytes"),(0,o.mdx)("li",{parentName:"ul"},"Maximum total state size: 10 GB"),(0,o.mdx)("li",{parentName:"ul"},"Token expiry (need to re-init after expiry): 1 hour"),(0,o.mdx)("li",{parentName:"ul"},"Non-supported characters for state keys are: '/', '\\', '?', '#'")),(0,o.mdx)("p",null,"These additional limitations should also be considered:"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"No ability to select or filter rows"),". For example, querying for the number of cars sold between different models."),(0,o.mdx)("p",null,"This limitation can be avoided by maintaining an index composed of different types. For example, if you want to maintain a list of cars by their color, use an index like the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'{\n  "red": ["id-1", "id-2", "id-3"],\n  "blue": ["id-4"],\n  "orange": ["id-5", "id-6"]\n}\n')),(0,o.mdx)("p",null,"You can further improve this by creating a key/value pair for each type. This results with faster indexing. Retrieve the IDs by type and quickly access the key/value storage to obtain the entities. The downside of this approach is the need to maintain an index."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"No ability to select or query columns or put limit on results returned"),"."),(0,o.mdx)("p",null,"This limitation can be avoided by maintaining an index of keys. For example, consider a simple array of IDs related to the entity:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},'const entities = ["id-1", "id-2", "id-3"];')),(0,o.mdx)("p",null,"Using an index of keys enables you to create utility functions that would divide the list of entities into separate chunks. This practice limits the number of returned items and uses the page as a cursor to get the next set of results when queried. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"export function findPage<T>(\n  collection: Array<T>,\n  total: number,\n  currentPage: number,\n  itemsPerPage: number,\n): Array<T> {\n  const fromSlice = (currentPage - 1) * itemsPerPage;\n  let toSlice = fromSlice + itemsPerPage;\n\n  if (toSlice > total) {\n | toSlice = total;\n  }\n\n  return collection.slice(fromSlice, toSlice);\n}\n\nexport async function pageable<T>(\n  ids: Array<ID>,\n  repository: PageableRepository<T>,\n  options: PageableOptions,\n  page?: number,\n): Promise<Collection<T>> {\n  const { defaultPage, itemsPerPage } = options;\n\n  const total = ids.length;\n  const currentPage = page ?? defaultPage;\n\n  const subsetIds = findPage<string>(ids, total, currentPage, itemsPerPage);\n\n  const promises: Array<Promise<T>> = [];\n  subsetIds.forEach((id: ID) => {\n    promises.push(repository.getEntity(id));\n  });\n\n  const collection: Array<T> = await Promise.all(promises);\n\n  return {\n    total,\n    collection,\n    count: collection.length,\n    pagination: {\n      currentPage,\n      lastPage: Math.ceil(total / itemsPerPage),\n    },\n  };\n}\n")),(0,o.mdx)("h2",{id:"adobe-io-file-library"},"Adobe I/O File library"),(0,o.mdx)("p",null,"Consider the following benefits and limitations when using the Adobe I/O File library."),(0,o.mdx)("h3",{id:"benefits-1"},"Benefits"),(0,o.mdx)("p",null,"Since ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-files")," uses blob storage in the Azure cloud, each user has their own segregated buckets. This is more segregated than ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-state"),", which is a shared Cosmos DB cluster."),(0,o.mdx)("p",null,"The development team also found that while ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-state")," is great at read/write operations, ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-files")," is not. The file library is a great option for tasks that are not read/write heavy. Since credentials require the utmost security, it did not seem prudent to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-state")," for this use case as it's not multi-tenant.Therefore, reading credentials from ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-files")," was a better option overall."),(0,o.mdx)("h3",{id:"limitations-1"},"Limitations"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib-files")," library has some limitations from both in practice and from the public documentation. Its closest comparison is Amazon S3 storage."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Read/write operations are not suitable for a high throughput layer. If you need to run a large number of operations, it can take roughly 10 to 20 seconds to return sizable results.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The development team ran into errors when trying to run an asynchronous version. Additionally, there were issues with simultaneously reading and writing file storage.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Developers must distinguish between public and non-public folders when modifying bucket permissions."))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-amazon-sales-channel-best-practices-database-storage-md-741ed995120605f274ae.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{267:function(t,e,a){"use strict";a.r(e);var n=a(38),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"business-context-and-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#business-context-and-analysis","aria-hidden":"true"}},[t._v("#")]),t._v(" Business Context and Analysis")]),t._v(" "),a("p",[t._v("CoolStore Website has the basic features: Product Catalog, Shopping Cart, Payment Process, Inventory, Rating, and Access Control.")]),t._v(" "),a("h2",{attrs:{id:"business-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#business-context","aria-hidden":"true"}},[t._v("#")]),t._v(" Business Context")]),t._v(" "),a("h3",{attrs:{id:"product-catalog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-catalog","aria-hidden":"true"}},[t._v("#")]),t._v(" Product Catalog")]),t._v(" "),a("ul",[a("li",[t._v("As a Buyer, I want to see the list of products with filtering, sorting on the home page (name, photo, short description, rating, and hot product flag which is a product with a lot of people see or buy).\n"),a("ul",[a("li",[t._v("Whenever filtering with any price and name of the product, then the list of products need to narrow down with appropriate products.")]),t._v(" "),a("li",[t._v("Whenever sorting with descending or ascending on the price or name of the product, then the list of products need to follow with this sorting.")]),t._v(" "),a("li",[t._v("Whenever both filtering and sorting in action, then the list of products shall be effective by both of description above.")])])]),t._v(" "),a("li",[t._v("As a Buyer, I want to navigate into the detail of one product with the basic attributes such as name, description, available product in the inventory, the inventory store information like stock address and location, a hot product flag (if has) and rating.")]),t._v(" "),a("li",[t._v("As a SysAdmin, I want to manage a product (CRUD actions) and assign one existing inventory into the product.")])]),t._v(" "),a("h3",{attrs:{id:"shopping-cart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopping-cart","aria-hidden":"true"}},[t._v("#")]),t._v(" Shopping Cart")]),t._v(" "),a("ul",[a("li",[t._v("As a Buyer, I want to buy any product on the product catalog page (add this product into the shopping cart - one product will be added by default).")]),t._v(" "),a("li",[t._v("As a Buyer, I want to see the product detail and buy this product if I like (add this product into the shopping cart - one product will be added by default).")]),t._v(" "),a("li",[t._v("As a Buyer, I want to see the list of products I just added into the shopping cart, and I would like to see the summary information panel for the current shopping cart such as cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount on this page.")]),t._v(" "),a("li",[t._v("As a Buyer, I want to update the amount of product in the shopping cart.\n"),a("ul",[a("li",[t._v("Whenever updating amount of product happens, then the summary information panel needs to be updated accordingly to changes.")])])]),t._v(" "),a("li",[t._v("As a Buyer, I want to delete any product in the shopping cart which they don't want to buy anymore.\n"),a("ul",[a("li",[t._v("Whenever the deleting amount of product happens, then the summary information panel needs to be updated accordingly to changes.")])])]),t._v(" "),a("li",[t._v("As a Buyer, I want to do check out my shopping cart.\n"),a("ul",[a("li",[t._v("Whenever the number of products in the shopping cart is zero then this checks out process does not happen.")])])]),t._v(" "),a("li",[t._v("While a shopping cart was checked out, the payment process starts.")]),t._v(" "),a("li",[t._v("As a SysAdmin, I want to see shopping cart of all buyers with information about cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount.")]),t._v(" "),a("li",[t._v("As a SysAdmin, I want to enable/disable any shopping cart of any buyer.")])]),t._v(" "),a("h3",{attrs:{id:"payment-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-process","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment Process")]),t._v(" "),a("ul",[a("li",[t._v("Any Buyer can do the payment.")]),t._v(" "),a("li",[t._v("In the moment of the payment process happening, we start to validation the item information, process for payment and subsequently send an email to the Buyer (because this is just the demo so we don't actually integrate with the payment gateway)\n"),a("ul",[a("li",[t._v("Whenever any product information is invalid, then the payment process will be canceled and one email will be sent to Buyer for notification.")]),t._v(" "),a("li",[t._v("Whenever ending this payment process, we mark the payment of this cart is processed status and send an email to let Buyer knows.")])])])]),t._v(" "),a("h3",{attrs:{id:"inventory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory","aria-hidden":"true"}},[t._v("#")]),t._v(" Inventory")]),t._v(" "),a("ul",[a("li",[t._v("As a SysAdmin, I want to manage inventory (CRUD actions).")])]),t._v(" "),a("h3",{attrs:{id:"rating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rating","aria-hidden":"true"}},[t._v("#")]),t._v(" Rating")]),t._v(" "),a("ul",[a("li",[t._v("As a Buyer, I want to rate for each product that I think is good (1 -> 5 stars).")])]),t._v(" "),a("h3",{attrs:{id:"access-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control","aria-hidden":"true"}},[t._v("#")]),t._v(" Access Control")]),t._v(" "),a("ul",[a("li",[t._v("Each Buyer/SysAdmin is a User.")]),t._v(" "),a("li",[t._v("As a Buyer/SysAdmin, I want to log-in to the system.\n"),a("ul",[a("li",[t._v("Whenever a user with a Buyer role does a login, then I will be brought to the product catalog page.")]),t._v(" "),a("li",[t._v("Whenever a user with a SysAdmin role does a login, then I will be brought to the administration page.")])])]),t._v(" "),a("li",[t._v("As a Buyer/SysAdmin, I want to log-out of the system.")])]),t._v(" "),a("h3",{attrs:{id:"one-off-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-off-tasks","aria-hidden":"true"}},[t._v("#")]),t._v(" One-off tasks")]),t._v(" "),a("ul",[a("li",[t._v("Seeding the sample data for the product.")]),t._v(" "),a("li",[t._v("Seeding the sample data for inventory.")]),t._v(" "),a("li",[t._v("Seeding the sample data for the rating of a few products (randomness).")]),t._v(" "),a("li",[t._v("Seeding a Bob user with SysAdmin role.")]),t._v(" "),a("li",[t._v("Seeding a Mary and Alice users with Buyer role.")])]),t._v(" "),a("h2",{attrs:{id:"conceptual-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conceptual-model","aria-hidden":"true"}},[t._v("#")]),t._v(" Conceptual Model")]),t._v(" "),a("p",[a("img",{attrs:{src:"/coolstore-microservices/conceptual-model.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"fine-tuning-1-finding-important-statements-starts-with-verbs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fine-tuning-1-finding-important-statements-starts-with-verbs","aria-hidden":"true"}},[t._v("#")]),t._v(" Fine Tuning 1: Finding important statements starts with verbs")]),t._v(" "),a("h3",{attrs:{id:"product-catalog-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-catalog-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Product Catalog")]),t._v(" "),a("ul",[a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("see the list of products with filtering, sorting on the home page")]),t._v(" (name, photo, short description, rating, and hot product flag which is a product with a lot of people see or buy).\n"),a("ul",[a("li",[t._v("Whenever filtering with any price and name of the product, then the list of products need to narrow down with appropriate products.")]),t._v(" "),a("li",[t._v("Whenever sorting with descending or ascending on the price or name of the product, then the list of products need to follow with this sorting.")]),t._v(" "),a("li",[t._v("Whenever both filtering and sorting in action, then the list of products shall be effective by both of description above.")])])]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("navigate into the detail of one product")]),t._v(" with the basic attributes such as name, description, available product in the inventory, the inventory store information like stock address and location, a hot product flag (if has) and rating.")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("SysAdmin")]),t._v(", I want to "),a("strong",[t._v("manage a product")]),t._v(" (CRUD actions) and "),a("strong",[t._v("assign one existing inventory into the product")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"shopping-cart-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopping-cart-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Shopping Cart")]),t._v(" "),a("ul",[a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("buy any product on the product catalog page")]),t._v(" (add this product into the shopping cart - one product will be added by default).")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("see the product detail and buy this product")]),t._v(" if I like (add this product into the shopping cart - one product will be added by default).")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("see the list of products")]),t._v(" I just added into the shopping cart, and I would like to "),a("strong",[t._v("see the summary information panel")]),t._v(" for the current shopping cart such as cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount on this page.")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("update the amount of product in the shopping cart")]),t._v(".\n"),a("ul",[a("li",[t._v("Whenever updating amount of product happens, then the summary information panel needs to be updated accordingly to changes.")])])]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("delete any product in the shopping cart")]),t._v(" which they don't want to buy anymore.\n"),a("ul",[a("li",[t._v("Whenever the deleting amount of product happens, then the summary information panel needs to be updated accordingly to changes.")])])]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to do "),a("strong",[t._v("check out my shopping cart")]),t._v(".\n"),a("ul",[a("li",[t._v("Whenever the number of products in the shopping cart is zero then this checks out process does not happen.")])])]),t._v(" "),a("li",[t._v("While a shopping cart was checked out, the payment process starts.")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("SysAdmin")]),t._v(", I want to "),a("strong",[t._v("see shopping cart of all buyers with information")]),t._v(" about cart total cost, promotion item saving cost, subtotal cost, shipping cost, promotion shipping savings cost, total order amount.")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("SysAdmin")]),t._v(", I want to "),a("strong",[t._v("enable/disable any shopping cart of any buyer")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"payment-process-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-process-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment Process")]),t._v(" "),a("ul",[a("li",[t._v("Any Buyer can do the payment.")]),t._v(" "),a("li",[t._v("In the moment of the "),a("strong",[t._v("payment process")]),t._v(" happening, we start to "),a("strong",[t._v("validation the item information")]),t._v(", "),a("strong",[t._v("process for payment")]),t._v(" and subsequently "),a("strong",[t._v("send an email to the Buyer")]),t._v(" (because this is just the demo so we don't actually integrate with the payment gateway)\n"),a("ul",[a("li",[t._v("Whenever any product information is invalid, then the payment process will be canceled and one email will be sent to Buyer for notification.")]),t._v(" "),a("li",[t._v("Whenever ending this payment process, we mark the payment of this cart is processed status and send an email to let Buyer knows.")])])])]),t._v(" "),a("h3",{attrs:{id:"inventory-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Inventory")]),t._v(" "),a("ul",[a("li",[t._v("As a "),a("strong",[t._v("SysAdmin")]),t._v(", I want to "),a("strong",[t._v("manage inventory")]),t._v(" (CRUD actions).")])]),t._v(" "),a("h3",{attrs:{id:"rating-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rating-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Rating")]),t._v(" "),a("ul",[a("li",[t._v("As a "),a("strong",[t._v("Buyer")]),t._v(", I want to "),a("strong",[t._v("rate for each product")]),t._v(" that I think is good (1 -> 5 stars).")])]),t._v(" "),a("h3",{attrs:{id:"access-control-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Access Control")]),t._v(" "),a("ul",[a("li",[t._v("Each Buyer/SysAdmin is a User.")]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer/SysAdmin")]),t._v(", I want to "),a("strong",[t._v("log-in to the system")]),t._v(".\n"),a("ul",[a("li",[t._v("Whenever a user with a Buyer role does a login, then I will be brought to the product catalog page.")]),t._v(" "),a("li",[t._v("Whenever a user with a SysAdmin role does a login, then I will be brought to the administration page.")])])]),t._v(" "),a("li",[t._v("As a "),a("strong",[t._v("Buyer/SysAdmin")]),t._v(", I want to "),a("strong",[t._v("log-out of the system")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"fine-tuning-2-get-rid-of-un-important-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fine-tuning-2-get-rid-of-un-important-statements","aria-hidden":"true"}},[t._v("#")]),t._v(" Fine tuning 2: Get rid of un-important statements")]),t._v(" "),a("h3",{attrs:{id:"product-catalog-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-catalog-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Product Catalog")]),t._v(" "),a("ul",[a("li",[t._v("[Buyer] see the list of products with filtering and sorting on price and name -> get products by filtering and sorting on price and name")]),t._v(" "),a("li",[t._v("[Buyer] navigate into the detail of one product -> get the detail of specific product")]),t._v(" "),a("li",[t._v("[SysAdmin] manage product -> create, update and delete a product")]),t._v(" "),a("li",[t._v("[SysAdmin] assign one existing inventory into the product -> update product with inventory")])]),t._v(" "),a("h3",{attrs:{id:"shopping-cart-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopping-cart-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Shopping Cart")]),t._v(" "),a("ul",[a("li",[t._v("[Buyer] buy any product on the product catalog page -> create the shopping cart with product")]),t._v(" "),a("li",[t._v("[Buyer] see the list of products -> get shopping cart with products")]),t._v(" "),a("li",[t._v("[Buyer] see the summary information panel (at the client side only)")]),t._v(" "),a("li",[t._v("[Buyer] update the amount of product in the shopping cart")]),t._v(" "),a("li",[t._v("[Buyer] delete any product in the shopping cart -> delete product in the shopping cart")]),t._v(" "),a("li",[t._v("[Buyer] check out my shopping cart -> check out the shopping cart")]),t._v(" "),a("li",[t._v("[SysAdmin] see shopping cart of all buyers with information -> get shopping cart of buyers")]),t._v(" "),a("li",[t._v("[SysAdmin] enable/disable any shopping cart of any buyer -> update enabled/disabled shopping cart of buyer")])]),t._v(" "),a("h3",{attrs:{id:"payment-process-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-process-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment Process")]),t._v(" "),a("ul",[a("li",[t._v("[System] validation the item information")]),t._v(" "),a("li",[t._v("[System] process for payment")]),t._v(" "),a("li",[t._v("[System] send an email to the Buyer")])]),t._v(" "),a("h3",{attrs:{id:"inventory-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Inventory")]),t._v(" "),a("ul",[a("li",[t._v("[SysAdmin] manage inventory -> view, create, update and delete an inventory")])]),t._v(" "),a("h3",{attrs:{id:"rating-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rating-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Rating")]),t._v(" "),a("ul",[a("li",[t._v("[Buyer] rate for each product -> create rating for product")])]),t._v(" "),a("h3",{attrs:{id:"access-control-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Access Control")]),t._v(" "),a("ul",[a("li",[t._v("[User] log in into the system")]),t._v(" "),a("li",[t._v("[User] log out of the system")])]),t._v(" "),a("h2",{attrs:{id:"usecase-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usecase-view","aria-hidden":"true"}},[t._v("#")]),t._v(" Usecase View")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"event-storming-1-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-storming-1-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Storming 1: Event")]),t._v(" "),a("h3",{attrs:{id:"product-catalog-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-catalog-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Product Catalog")]),t._v(" "),a("ul",[a("li",[t._v("ProductListDisplayed (filter + sorting)")]),t._v(" "),a("li",[t._v("ProductDisplayed")]),t._v(" "),a("li",[t._v("ProductCreated")]),t._v(" "),a("li",[t._v("ProductUpdated")]),t._v(" "),a("li",[t._v("ProductDeleted")]),t._v(" "),a("li",[t._v("InventoryAssigned")])]),t._v(" "),a("h3",{attrs:{id:"shopping-cart-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopping-cart-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Shopping Cart")]),t._v(" "),a("ul",[a("li",[t._v("ProductInShoppingCartAdded")]),t._v(" "),a("li",[t._v("ShoppingCartWithProductsDisplayed")]),t._v(" "),a("li",[t._v("NumberOfProductInShoppingCartChanged")]),t._v(" "),a("li",[t._v("ProductInShoppingCartDeleted")]),t._v(" "),a("li",[t._v("ShoppingCartCheckedOut")]),t._v(" "),a("li",[t._v("BuyersShoppingCartDisplayed")]),t._v(" "),a("li",[t._v("ShoppingCartEnabled")]),t._v(" "),a("li",[t._v("ShoppingCartDisabled")])]),t._v(" "),a("h3",{attrs:{id:"inventory-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Inventory")]),t._v(" "),a("ul",[a("li",[t._v("InventoryListDisplayed")]),t._v(" "),a("li",[t._v("InventoryCreated")]),t._v(" "),a("li",[t._v("InventoryUpdated")]),t._v(" "),a("li",[t._v("InventoryDeleted")])]),t._v(" "),a("h3",{attrs:{id:"rating-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rating-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Rating")]),t._v(" "),a("ul",[a("li",[t._v("ProductRated")])]),t._v(" "),a("h3",{attrs:{id:"access-control-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Access Control")]),t._v(" "),a("ul",[a("li",[t._v("BuyerCreated")]),t._v(" "),a("li",[t._v("SysAdminCreated")])]),t._v(" "),a("h3",{attrs:{id:"system-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-control","aria-hidden":"true"}},[t._v("#")]),t._v(" System Control")]),t._v(" "),a("ul",[a("li",[t._v("ProductSeeded")]),t._v(" "),a("li",[t._v("InventorySeeded")]),t._v(" "),a("li",[t._v("RatingSeeded")]),t._v(" "),a("li",[t._v("ServiceSeededDisplayed")]),t._v(" "),a("li",[t._v("ServiceHealthyDisplayed")])]),t._v(" "),a("h2",{attrs:{id:"event-storming-2-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-storming-2-command","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Storming 2: Command")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"event-storming-3-invariants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-storming-3-invariants","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Storming 3: Invariants")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"event-storming-4-bounded-context-query-view-modular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-storming-4-bounded-context-query-view-modular","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Storming 4: Bounded Context (Query/View -> Modular)")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"event-storming-5-communication-between-bcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-storming-5-communication-between-bcs","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Storming 5: Communication between BCs")]),t._v(" "),a("p",[t._v("TODO")])])},[],!1,null,null,null);e.default=r.exports}}]);
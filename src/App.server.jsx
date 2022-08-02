import React from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  CartProvider,
} from "@shopify/hydrogen";
import { Suspense } from "react";

function App({ routes }) {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <CartProvider>
            <FileRoutes routes={routes} />
          </CartProvider>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);

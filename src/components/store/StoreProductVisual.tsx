import Image from "next/image";
import type { StoreProduct } from "@/lib/store-products";

type StoreProductVisualProps = {
  product: StoreProduct;
  compact?: boolean;
};

export default function StoreProductVisual({ product, compact = false }: StoreProductVisualProps) {
  return (
    <div
      className={`store-product-visual store-product-visual--${product.accent}${compact ? " store-product-visual--compact" : ""}`}
      aria-hidden="true"
    >
      {product.image && (
        <Image
          className="store-product-visual-cover"
          src={product.image}
          alt={product.imageAlt ?? ""}
          width={720}
          height={960}
          sizes={compact ? "(max-width: 768px) 82vw, 28vw" : "(max-width: 768px) 82vw, 38vw"}
        />
      )}
      <div className="store-product-visual-grid" />
      {!product.image && (
        <>
          <span className="store-product-visual-category">{product.category}</span>
          <strong>{product.shortTitle}</strong>
          <span className="store-product-visual-format">{product.format}</span>
          <i className="store-product-visual-orbit" />
          <i className="store-product-visual-ribbon" />
        </>
      )}
    </div>
  );
}

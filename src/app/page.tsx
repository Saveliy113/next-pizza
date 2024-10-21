import { Container } from "@/components/shared/container";
import Filters from "@/components/shared/filters";
import ProductCard from "@/components/shared/product-card";
import ProductsGroupList from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Пиццы" 
                items={[
                  {
                    id: 1,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList 
                title="Завтраки" 
                items={[
                  {
                    id: 1,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чоризо фреш',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

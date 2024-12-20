import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCartItems() {
    try {
      const response = await fetch(
        "http://carretailerbackend.vercel.app/api/cart/getcart",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCartItems(data.parts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-black py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-white">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm dark:border-gray-700 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="w-20 shrink-0 md:order-1">
                        <img
                          className="h-20 w-20 dark:hidden"
                          src={item.imageUrl}
                          alt={item.name}
                        />
                        <img
                          className="hidden h-20 w-20 dark:block"
                          src={item.imageUrlDark}
                          alt={item.name}
                        />
                      </a>

                      <label
                        htmlFor={`counter-input-${item.id}`}
                        className="sr-only"
                      >
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            id={`decrement-button-${item.id}`}
                            data-input-counter-decrement={`counter-input-${item.id}`}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-600 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id={`counter-input-${item.id}`}
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-white focus:outline-none focus:ring-0"
                            value={item.quantity}
                            required
                          />
                          <button
                            type="button"
                            id={`increment-button-${item.id}`}
                            data-input-counter-increment={`counter-input-${item.id}`}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-600 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-white">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          className="text-base font-medium text-white hover:underline"
                        >
                          {item.name}
                        </a>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white hover:underline"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                            </svg>
                            Add to Favorites
                          </button>

                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-white">Order summary</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-white">
                      $
                      {cartItems
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-400">
                      Discount
                    </dt>
                    <dd className="text-base font-medium text-white">$0.00</dd>
                  </dl>
                </div>

                <div className="border-b border-gray-600"></div>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-400">
                    Total price
                  </dt>
                  <dd className="text-base font-semibold text-white">
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </dd>
                </dl>
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-red-600 px-4 py-2 text-base font-semibold text-white hover:bg-red-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

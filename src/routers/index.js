function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

function Cart2() {
    return <h3>Cart2</h3>;
}

export default [
  {
    path: "/Bus",
    component: Bus
  },
  {
    path: "/Cart",
    component: Cart,
    routes: [
      {
        path: "/Bus/bus",
        component: Bus
      },
      {
        path: "/Cart/Cart2",
        component: Cart2
      }
    ]
  }
];
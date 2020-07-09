function Bus() {
  return <h3>Bus</h3>;
}

function Dss() {
  return <h3>Dss/Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

function Cart2() {
  return <h3>Cart2</h3>;
}

export default [
  {
    key: '0',
    path: "/Bus",
    component: Bus
  },
  {
    key: '2',
    path: "/Dss/Bus",
    component: Dss
  },
  {
    key: '1',
    path: "/Cart",
    component: Cart,
    routes: [
      {
        path: "/Cart/Bus",
        component: Bus
      },
      {
        path: "/Cart/Cart2",
        component: Cart2
      }
    ]
  }
];
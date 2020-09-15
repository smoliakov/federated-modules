import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import SayHelloFromA from 'application_a/SayHelloFromA';
import SayHelloFromB from 'application_b/SayHelloFromB';

const headerItems = [
  { label: 'Start' },
  { label: 'Middle' },
  { label: 'End' },
];

export default function ApplicationHost() {
  return (
    <div>
      <Header items={headerItems} />
      <h1>Application Host</h1>
      <div style={{ border: 'solid 1px red' }}>
        <div>Application A</div>
        <SayHelloFromA />
      </div>
      <div style={{ border: 'solid 1px green' }}>
        <div>Application B</div>
        <SayHelloFromB />
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';

import SayHelloFromA from 'application_a/SayHelloFromA';
import SayHelloFromB from 'application_b/SayHelloFromB';

export default function ApplicationHost() {
  return (
    <div>
      <h1>Application Host</h1>

      <div style={{ border: 'solid 1px red' }}>
        <div>Application A</div>
        <SayHelloFromA />
      </div>
      <div style={{ border: 'solid 1px green' }}>
        <div>Application B</div>
        <SayHelloFromB />
      </div>
    </div>
  );
}

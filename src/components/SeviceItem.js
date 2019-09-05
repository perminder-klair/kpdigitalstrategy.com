import React from 'react';

const SeviceItem = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-1">Suspendisse eget ullamcorper turpis</h1>
          <h2 className="subtitle is-2 has-text-danger">
            Vivamus erat lorem, rutrum non facilisis sit amet, scelerisque.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus
            mi ac nunc pharetra sollicitudin. Fusce et condimentum lacus. Donec
            pharetra tempus tortor. Phasellus scelerisque auctor nisi, eget
            imperdiet tellus aliquam at. Sed eu gravida neque. Vestibulum
            pulvinar pellentesque nisl, ut imperdiet nibh mattis vitae. Aenean
            non felis ut urna rhoncus consectetur.
          </p>
          <p>
            Donec pharetra tempus tortor. Phasellus scelerisque auctor nisi,
            eget imperdiet tellus aliquam at. Sed eu gravida neque. Vestibulum
            pulvinar pellentesque nisl, ut imperdiet nibh mattis vitae. Aenean
            non felis ut urna rhoncus consectetur. Nam laoreet mauris libero, et
            bibendum est dignissim quis. Quisque eu pulvinar risus, et vehicula
            nibh. Curabitur non feugiat ligula, vitae sodales purus.
          </p>
          <p>
            Vestibulum pulvinar pellentesque nisl, ut imperdiet nibh mattis
            vitae.
          </p>
          <button className="button is-primary" type="button">
            View our portfolio
          </button>
        </div>
        <div className="column">
          <img src="/images/dummy/image5.png" alt="service image" />
        </div>
      </div>
    </div>
  </section>
);

export default SeviceItem;

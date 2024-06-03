// src/components/Dashboard.js

import React from 'react';
import InfoCardWarren from './warrenpetercard';

const CardFWarren = () => {
  
    return (
      <div id="app" className="md:flex antialiased">
        <main className="bg-gray-100 w-full overflow-y-auto">
          { (
            <section id="performance">
              
              <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
             Gurus Confidence               
             </header>
                <section className="flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
                  <InfoCardWarren title="Warren Buffet" change="9.1" isPositive />
                  <InfoCardWarren title="Oneil" change="12.0" isPositive />
                  <InfoCardWarren title="William Graham"  change="-12" isPositive={false} />
                  <InfoCardWarren title="OShaughnessy "  change="-12" isPositive={false} />
                  
                </section>
              </section>
            </section>
          )}
        </main>
      </div>
    );
  };

export default CardFWarren;

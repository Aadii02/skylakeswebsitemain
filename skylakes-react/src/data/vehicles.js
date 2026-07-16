export const vehicleCategories = {
  'model-rockets': {
    id: 'model-rockets',
    name: 'Model Rockets',
    title: 'SKYLX Model Rockets',
    description: 'Our family of three fully reusable small-lift launch vehicles designed to serve diverse mission profiles with precision and reliability.',
    vehicles: [
      {
        id: 'skylx-s',
        name: 'SKYLX-S',
        fullName: 'SKYLX-S Small Lift Vehicle',
        tagline: 'Small LV',
        subtitle: 'Dedicated, affordable access to orbit',
        leoPayload: '500 kg',
        ssoPayload: '350 kg',
        reusability: 'Fully Reusable',
        targetPayloads: 'CubeSats (1U-16U), MicroSats, RideShare slots for small spacecraft, Earth observation satellites, technology demonstrators.',
        description: 'Entry-level reusable launch vehicle optimized for small satellite missions with rapid turnaround and cost efficiency.',
        specs: [
          { label: 'LEO Payload', value: 'Up to 500 kg' },
          { label: 'SSO Payload', value: 'Up to 350 kg' },
          { label: 'Reusability', value: 'Fully Reusable' },
          { label: 'First Stage', value: 'Single Core' },
          { label: 'Recovery Method', value: 'Powered Landing' },
        ],
      },
      {
        id: 'skylx-m',
        name: 'SKYLX-M',
        fullName: 'SKYLX-M Medium Lift Vehicle',
        tagline: 'Medium LV',
        subtitle: 'The versatile, high-cadence workhorse',
        leoPayload: '6,000 kg',
        gtoPayload: '2,200 kg',
        reusability: 'Fully Reusable',
        targetPayloads: 'Medium-class satellites (2,000-6,000 kg), internet constellations, ISS cargo missions, deep space probe insertion.',
        description: 'Versatile medium-lift vehicle designed for high-frequency commercial operations and ambitious constellation deployments.',
        specs: [
          { label: 'LEO Payload', value: 'Up to 6,000 kg' },
          { label: 'GTO Payload', value: 'Up to 2,200 kg' },
          { label: 'Reusability', value: 'Fully Reusable' },
          { label: 'First Stage', value: 'Dual Core' },
          { label: 'Recovery Method', value: 'Powered Landing' },
        ],
      },
      {
        id: 'skylx-h',
        name: 'SKYLX-H',
        fullName: 'SKYLX-H Heavy Lift Vehicle',
        tagline: 'Heavy LV',
        subtitle: 'Maximum performance. Built for the largest missions',
        leoPayload: '25,000 kg',
        gtoPayload: '9,500 kg',
        reusability: 'Fully Reusable',
        targetPayloads: 'Very large commercial satellites, national security payloads, space station modules, lunar cargo missions, Mars trajectory.',
        description: 'High-capacity reusable vehicle for demanding mission profiles and heavy-lift national security applications.',
        specs: [
          { label: 'LEO Payload', value: 'Up to 25,000 kg' },
          { label: 'GTO Payload', value: 'Up to 9,500 kg' },
          { label: 'Reusability', value: 'Fully Reusable' },
          { label: 'First Stage', value: 'Triple Core' },
          { label: 'Recovery Method', value: 'Powered Landing' },
        ],
      },
    ],
  },
};

export const getVehicleCategory = (categoryId) => {
  return vehicleCategories[categoryId] || null;
};

export const getVehicleById = (categoryId, vehicleId) => {
  const category = vehicleCategories[categoryId];
  if (!category) return null;
  return category.vehicles.find((v) => v.id === vehicleId) || null;
};

export const getAllVehicles = () => {
  const allVehicles = [];
  Object.values(vehicleCategories).forEach((category) => {
    allVehicles.push(...category.vehicles);
  });
  return allVehicles;
};

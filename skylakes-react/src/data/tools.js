// Engineering Tools — config-driven list. Add a new tool by appending one
// entry here; ToolsPage renders everything (cards, filter chips, stats).
//
//   name        : display name
//   description : card copy (1–2 sentences)
//   status      : 'Live' | 'Beta' | 'Coming Soon'
//   tags        : string[] — disciplines; drives the filter chips automatically
//   thumbnail   : built-in HUD graphic ('propulsion' | 'avionics' |
//                 'structures' | 'thermal'), or a path starting with '/'
//                 (e.g. '/tools/propulsionlab.png') for a real screenshot
//   link        : required for Live/Beta tools only; opens in a new tab

const tools = [
  {
    name: 'PropulsionLab',
    description:
      'Interactive rocket engine simulator — liquid engine cycles and solid motor grain burnback, modeled against real published engine data.',
    status: 'Live',
    tags: ['Propulsion'],
    thumbnail: 'propulsion',
    link: '/tools/propulsionlab.html',
  },
  {
    name: 'TrajectoryLab',
    description:
      'Ascent and orbital-insertion trajectory planner, including powered-landing return profiles for reusable first stages.',
    status: 'Coming Soon',
    tags: ['Avionics'],
    thumbnail: 'avionics',
  },
  {
    name: 'StructuresLab',
    description:
      'Stage mass budgeting and structural margin checks for tank domes, interstages, and primary load paths.',
    status: 'Coming Soon',
    tags: ['Structures'],
    thumbnail: 'structures',
  },
  {
    name: 'ThermalLab',
    description:
      'Re-entry and engine thermal-load modeling — TPS sizing against aerothermal and combustion heating.',
    status: 'Coming Soon',
    tags: ['Structures'],
    thumbnail: 'thermal',
  },
];

export default tools;

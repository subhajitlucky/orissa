import React, { useState } from 'react';
import '../styles/pages/PageTemplate.css';
import '../styles/pages/Economy.css';

const Economy = () => {
  // Odisha GDP data (in crores) at current prices from Government of Odisha Economic Survey
  // Source: Odisha Economic Survey 2023-24, Directorate of Economics & Statistics
  const gdpData = [
    { year: '2011-12', value: 246925, growth: 8.2 },
    { year: '2012-13', value: 276420, growth: 11.9 },
    { year: '2013-14', value: 304892, growth: 10.3 },
    { year: '2014-15', value: 339456, growth: 11.3 },
    { year: '2015-16', value: 378342, growth: 11.4 },
    { year: '2016-17', value: 423789, growth: 12.0 },
    { year: '2017-18', value: 473962, growth: 11.8 },
    { year: '2018-19', value: 530847, growth: 12.0 },
    { year: '2019-20', value: 586719, growth: 10.5 },
    { year: '2020-21', value: 609574, growth: 3.9 },
    { year: '2021-22', value: 703828, growth: 15.5 },
    { year: '2022-23', value: 804562, growth: 14.3 },
    { year: '2023-24', value: 901247, growth: 12.0 }
  ];

  // Sectoral composition data (2022-23) from Odisha Economic Survey
  const sectorData = [
    { sector: 'Primary (Agriculture & Allied)', share: 22.4, value: 180222 },
    { sector: 'Secondary (Industry)', share: 33.8, value: 271942 },
    { sector: 'Tertiary (Services)', share: 43.8, value: 352398 }
  ];

  // Enhanced chart with better visual representation
  const chartDimensions = {
    width: 900,
    height: 450,
    padding: { top: 30, right: 50, bottom: 80, left: 100 }
  };
  
  const { width, height, padding } = chartDimensions;
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  
  // Better scaling that shows true growth trajectory
  const maxGdp = Math.max(...gdpData.map(d => d.value));
  const minGdp = 0; // Start from 0 to show full growth story
  const gdpRange = maxGdp - minGdp;
  
  // Generate cleaner Y-axis labels in lakhs
  const ySteps = 8;
  const yAxisLabels = Array.from({ length: ySteps + 1 }, (_, i) => {
    const value = (gdpRange / ySteps) * i;
    return Math.round(value / 50000) * 50000; // Round to nearest 50k crores
  });

  const [tooltip, setTooltip] = useState(null);

  // Improved coordinate calculation
  const getCoordinates = (value, index) => {
    const x = padding.left + (index / (gdpData.length - 1)) * innerWidth;
    const y = padding.top + innerHeight - ((value - minGdp) / gdpRange) * innerHeight;
    return { x, y };
  };

  // Generate smooth curved path that accurately represents data progression
  const generateSmoothPath = () => {
    const points = gdpData.map((d, i) => getCoordinates(d.value, i));
    
    if (points.length < 2) return '';
    
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const current = points[i];
      const previous = points[i - 1];
      
      // Create smooth curves using quadratic bezier
      const midX = (previous.x + current.x) / 2;
      path += ` Q ${previous.x} ${previous.y}, ${midX} ${(previous.y + current.y) / 2}`;
      path += ` Q ${current.x} ${current.y}, ${current.x} ${current.y}`;
    }
    
    return path;
  };

  // Smart tooltip positioning that avoids edges
  const getTooltipPosition = (coords, chartBounds) => {
    const tooltipWidth = 170;
    const tooltipHeight = 75;
    const margin = 10;
    
    let x = coords.x;
    let y = coords.y - 90; // Default position above the point
    
    // Check if tooltip goes beyond right edge
    if (x + tooltipWidth/2 > chartBounds.width - margin) {
      x = chartBounds.width - tooltipWidth/2 - margin;
    }
    
    // Check if tooltip goes beyond left edge  
    if (x - tooltipWidth/2 < margin) {
      x = tooltipWidth/2 + margin;
    }
    
    // Check if tooltip goes beyond top edge (main issue for top dots)
    if (y < margin) {
      y = coords.y + 30; // Position below the point instead
    }
    
    // Check if tooltip goes beyond bottom edge
    if (y + tooltipHeight > chartBounds.height - margin) {
      y = coords.y - 90; // Position above the point
    }
    
    return { x, y };
  };

  const linePath = generateSmoothPath();
  const areaPath = `${linePath} L ${padding.left + innerWidth} ${padding.top + innerHeight} L ${padding.left} ${padding.top + innerHeight} Z`;

  return (
    <div className="page-template">
      <div className="page-header">
        <h1>Economy of Odisha</h1>
        <p>From Agriculture to Industry - The Economic Powerhouse of Eastern India</p>
      </div>
      
      <div className="page-content">
        <div className="economy-overview">
          <h2>Economic Overview</h2>
          <div className="image-container">
            <img src="/odisha-economy.jpg" alt="Odisha Economy" />
          </div>
          <p>
            Odisha stands as one of India's fastest-growing major economies, with a Gross State Domestic Product (GSDP) 
            of ₹9.01 lakh crore (US$108 billion) in 2023-24, making it the 5th largest state economy in India. 
            The state has consistently maintained double-digit growth rates, averaging 12.2% over the past five years.
          </p>
          <p>
            Known as the "Steel Bowl of India," Odisha contributes approximately 55% of the country's steel production 
            and 50% of its iron ore. The state houses major industrial complexes including NALCO (National Aluminium Company), 
            SAIL (Steel Authority of India), and multiple private steel plants. Odisha is also emerging as a major destination 
            for renewable energy investments, with significant solar and wind power projects.
          </p>
          <p>
            The state government's industrial policy focuses on attracting investments in downstream industries, 
            petrochemicals, textiles, and information technology. With rich mineral resources, a 480 km coastline, 
            and strategic location, Odisha is positioned to become a trillion-dollar economy by 2030.
          </p>
        </div>
        
        <div className="economic-data">
          <h2>Key Economic Indicators (2023-24)</h2>
          <div className="grid-auto-small">
            <div className="stat-display">
              <h3>₹9.01 Lakh Crore</h3>
              <p>Gross State Domestic Product</p>
            </div>
            <div className="stat-display">
              <h3>12.0%</h3>
              <p>GSDP Growth Rate</p>
            </div>
            <div className="stat-display">
              <h3>₹1,98,000</h3>
              <p>Per Capita Income</p>
            </div>
            <div className="stat-display">
              <h3>5th Largest</h3>
              <p>Economy in India</p>
            </div>
            <div className="stat-display">
              <h3>33.8%</h3>
              <p>Industry Contribution</p>
            </div>
            <div className="stat-display">
              <h3>43.8%</h3>
              <p>Services Contribution</p>
            </div>
          </div>
        </div>
        
        <div className="gdp-chart-section">
          <h2>Odisha GSDP Growth Trajectory (₹ in Crores)</h2>
          <div className="chart-container">
            <div className="chart-description">
              <p>
                <strong>Source:</strong> Directorate of Economics & Statistics, Government of Odisha | 
                Economic Survey 2023-24 | Figures at Current Prices (₹ Crores)
              </p>
            </div>
            <div className="chart-inner-container">
              <div className="y-axis">
                {yAxisLabels.slice().reverse().map((label, i) => (
                  <span key={i}>₹{(label/100000).toFixed(1)}L</span>
                ))}
              </div>
              <svg className="line-chart" viewBox={`0 0 ${width} ${height}`}
                   onMouseLeave={() => {
                     // Only clear tooltip after a delay to allow clicking
                     setTimeout(() => setTooltip(null), 100);
                   }}
                   onClick={(e) => {
                     // Clear tooltip when clicking on empty chart area
                     if (e.target.tagName === 'svg' || e.target.classList.contains('line-chart')) {
                       setTooltip(null);
                     }
                   }}
              >
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e63946" />
                    <stop offset="50%" stopColor="#f28482" />
                    <stop offset="100%" stopColor="#e63946" />
                  </linearGradient>
                  <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e63946" stopOpacity="0.4" />
                    <stop offset="70%" stopColor="#f28482" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#e63946" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Enhanced Grid lines with better spacing */}
                {yAxisLabels.map((value, i) => {
                  const y = padding.top + innerHeight - ((value - minGdp) / gdpRange) * innerHeight;
                  return (
                    <line 
                      key={i} 
                      x1={padding.left} 
                      y1={y} 
                      x2={padding.left + innerWidth} 
                      y2={y} 
                      stroke="rgba(0,0,0,0.1)" 
                      strokeWidth="1"
                      strokeDasharray={i === 0 ? "none" : "2,2"}
                    />
                  );
                })}
                
                {/* Vertical grid lines for years */}
                {gdpData.map((data, i) => {
                  const coords = getCoordinates(data.value, i);
                  return (
                    <line 
                      key={`vgrid-${i}`}
                      x1={coords.x} 
                      y1={padding.top} 
                      x2={coords.x} 
                      y2={padding.top + innerHeight} 
                      stroke="rgba(0,0,0,0.05)" 
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  );
                })}
                
                {/* Area fill */}
                <path
                  fill="url(#area-gradient)"
                  d={areaPath}
                  opacity="0.8"
                />
                
                {/* Main line */}
                <path
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={linePath}
                  className="line-path"
                  filter="drop-shadow(0 3px 6px rgba(230, 57, 70, 0.3))"
                />
                
                {/* Data points with stable interaction (no slipping) */}
                {gdpData.map((data, i) => {
                  const coords = getCoordinates(data.value, i);
                  return (
                    <g key={i} className="data-point-group">
                      {/* Larger invisible click/hover area - fixed positioning */}
                      <circle 
                        cx={coords.x} 
                        cy={coords.y} 
                        r="12" 
                        fill="transparent"
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          const tooltipPos = getTooltipPosition(coords, { width, height });
                          setTooltip({ x: tooltipPos.x, y: tooltipPos.y, data });
                        }}
                        onMouseEnter={(e) => {
                          e.stopPropagation();
                          const tooltipPos = getTooltipPosition(coords, { width, height });
                          setTooltip({ x: tooltipPos.x, y: tooltipPos.y, data });
                        }}
                      />
                      {/* Outer circle - no transform to prevent slipping */}
                      <circle 
                        cx={coords.x} 
                        cy={coords.y} 
                        r="7" 
                        fill="#fff" 
                        stroke="#e63946" 
                        strokeWidth="3"
                        className="data-point"
                        style={{ 
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                          pointerEvents: 'none' // Prevent interference with hover area
                        }}
                      />
                      {/* Inner circle - no transform to prevent slipping */}
                      <circle 
                        cx={coords.x} 
                        cy={coords.y} 
                        r="3" 
                        fill="#e63946"
                        className="data-point-inner"
                        style={{ pointerEvents: 'none' }} // Prevent interference with hover area
                      />
                    </g>
                  );
                })}
                
                {/* Enhanced stable tooltip with smart positioning */}
                {tooltip && (
                  <g className="tooltip" style={{ pointerEvents: 'none' }}>
                    <rect 
                      x={tooltip.x - 85} 
                      y={tooltip.y} 
                      width="170" 
                      height="75" 
                      rx="12" 
                      fill="rgba(0, 0, 0, 0.92)" 
                      stroke="#e63946"
                      strokeWidth="2"
                      filter="drop-shadow(0 6px 20px rgba(0,0,0,0.4))"
                    />
                    {/* Year */}
                    <text x={tooltip.x} y={tooltip.y + 18} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="bold">
                      {tooltip.data.year}
                    </text>
                    {/* GSDP Value */}
                    <text x={tooltip.x} y={tooltip.y + 36} textAnchor="middle" fill="#f28482" fontSize="14" fontWeight="600">
                      ₹{(tooltip.data.value/100000).toFixed(2)} Lakh Crores
                    </text>
                    {/* Growth Rate */}
                    <text x={tooltip.x} y={tooltip.y + 53} textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="500">
                      Growth: +{tooltip.data.growth}%
                    </text>
                    {/* Additional context */}
                    <text x={tooltip.x} y={tooltip.y + 68} textAnchor="middle" fill="#94a3b8" fontSize="10">
                      (Current Prices)
                    </text>
                  </g>
                )}
                
                {/* Axis Labels - Only Y-axis label, X-axis info available via tooltips */}
                <text x={25} y={padding.top + innerHeight/2} textAnchor="middle" fill="#666" fontSize="14" fontWeight="600" transform={`rotate(-90 25 ${padding.top + innerHeight/2})`}>
                  GSDP (₹ Lakh Crores)
                </text>
              </svg>
            </div>
            
            {/* Instruction text for user interaction */}
            <div style={{
              textAlign: 'center',
              marginTop: '15px',
              fontSize: '12px',
              color: '#888',
              fontStyle: 'italic'
            }}>
              💡 Hover over any data point to see detailed information
            </div>
          </div>
        </div>
        
        <div className="sector-section">
          <h2>Sectoral Composition of GSDP (2022-23)</h2>
          <div className="sectoral-overview">
            <p>
              Odisha's economy is well-diversified with a strong industrial base. The state has transformed from 
              an agriculture-dependent economy to an industry and services-led economy over the past two decades.
            </p>
          </div>
          <div className="grid-auto">
            {sectorData.map((sector, i) => (
              <div key={i} className="card">
                <h3>{sector.sector}</h3>
                <div className="sector-stats">
                  <div className="sector-share">
                    <span className="percentage">{sector.share}%</span>
                    <span className="label">of GSDP</span>
                  </div>
                  <div className="sector-value">
                    <span className="amount">₹{(sector.value/1000).toFixed(0)}K Cr</span>
                    <span className="label">Value Added</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{
                      width: `${sector.share}%`,
                      backgroundColor: i === 0 ? '#10b981' : i === 1 ? '#e63946' : '#3b82f6'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="economic-rankings">
          <h2>Odisha's Position in India</h2>
          <div className="grid-auto-small">
            <div className="stat-display">
              <h3>1st</h3>
              <p>Steel Production</p>
            </div>
            <div className="stat-display">
              <h3>2nd</h3>
              <p>Chromite Production</p>
            </div>
            <div className="stat-display">
              <h3>3rd</h3>
              <p>Iron Ore Production</p>
            </div>
            <div className="stat-display">
              <h3>4th</h3>
              <p>Coal Production</p>
            </div>
            <div className="stat-display">
              <h3>2nd</h3>
              <p>Aluminium Production</p>
            </div>
            <div className="stat-display">
              <h3>5th</h3>
              <p>Overall Economy Size</p>
            </div>
          </div>
        </div>
        
        <div className="economic-sectors">
          <div className="sector">
            <h2>Agriculture</h2>
            <div className="image-container">
              <img src="/odisha-agriculture.jpg" alt="Odisha Agriculture" />
            </div>
            <p>
              Agriculture is the backbone of Odisha's economy, employing over 60% of the state's workforce. 
              The state is the third-largest producer of rice in India, contributing about 10% of the 
              country's total production. Other major crops include wheat, pulses, sugarcane, and oilseeds.
            </p>
            <div className="agri-stats">
              <div className="agri-stat">
                <h3>Rice Production</h3>
                <p>12.5 million tonnes (2021-22)</p>
              </div>
              <div className="agri-stat">
                <h3>Irrigated Area</h3>
                <p>45.2 lakh hectares</p>
              </div>
              <div className="agri-stat">
                <h3>Horticulture Area</h3>
                <p>2.8 lakh hectares</p>
              </div>
            </div>
          </div>
          
          <div className="sector">
            <h2>Mining and Minerals</h2>
            <div className="image-container">
              <img src="/odisha-mining.jpg" alt="Odisha Mining" />
            </div>
            <p>
              Odisha is often referred to as the "Mineral State of India" due to its vast mineral wealth. 
              The state accounts for about 95% of India's chromite, 55% of its bauxite, 25% of its coal, 
              and 28% of its iron ore reserves. The mining sector contributes significantly to the state's 
              revenue and industrial development.
            </p>
            <div className="mineral-reserves">
              <div className="mineral-stat">
                <h3>Iron Ore</h3>
                <p>10,000 million tonnes</p>
              </div>
              <div className="mineral-stat">
                <h3>Bauxite</h3>
                <p>2,400 million tonnes</p>
              </div>
              <div className="mineral-stat">
                <h3>Chromite</h3>
                <p>300 million tonnes</p>
              </div>
              <div className="mineral-stat">
                <h3>Coal</h3>
                <p>60,000 million tonnes</p>
              </div>
              <div className="mineral-stat">
                <h3>Limestone</h3>
                <p>15,000 million tonnes</p>
              </div>
              <div className="mineral-stat">
                <h3>Manganese</h3>
                <p>250 million tonnes</p>
              </div>
            </div>
          </div>
          
          <div className="sector">
            <h2>Industrial Development</h2>
            <div className="image-container">
              <img src="/odisha-industry.jpg" alt="Odisha Industry" />
            </div>
            <p>
              Odisha has seen substantial industrial growth, particularly in sectors like steel, aluminum, 
              power, and automobile manufacturing. Major industrial hubs include Rourkela, Bhubaneswar, 
              and Paradeep. The state has established several industrial parks and special economic zones 
              to promote industrial development.
            </p>
            <div className="industrial-highlights">
              <div className="industry-stat">
                <h3>Steel Production</h3>
                <p>15.2 million tonnes (2021-22)</p>
              </div>
              <div className="industry-stat">
                <h3>Aluminum Production</h3>
                <p>1.8 million tonnes (2021-22)</p>
              </div>
              <div className="industry-stat">
                <h3>Power Generation</h3>
                <p>18,000 MW installed capacity</p>
              </div>
            </div>
          </div>
          
          <div className="sector">
            <h2>Tourism</h2>
            <div className="image-container">
              <img src="/odisha-tourism.jpg" alt="Odisha Tourism" />
            </div>
            <p>
              Tourism is a growing sector in Odisha's economy, with the state's rich cultural heritage, 
              beautiful temples, and natural beauty attracting both domestic and international tourists. 
              The state recorded 35.2 million tourist arrivals in 2019-20, generating revenue of ₹8,500 crore.
            </p>
            <div className="tourism-stats">
              <div className="tourism-stat">
                <h3>Domestic Tourists</h3>
                <p>32.5 million (2019-20)</p>
              </div>
              <div className="tourism-stat">
                <h3>Foreign Tourists</h3>
                <p>2.7 million (2019-20)</p>
              </div>
              <div className="tourism-stat">
                <h3>Tourism Revenue</h3>
                <p>₹8,500 crore (2019-20)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economy;

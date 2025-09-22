import { useEffect, useState, useRef } from 'react';

// CSS styles for enhanced animations
const steeplogicStyles = `
  .steeplogic-svg {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }

  .steeplogic-svg.animating {
    animation: steeplogic-pulse 0.3s ease-in-out;
  }

  .steeplogic-svg:hover {
    cursor: pointer;
  }

  @keyframes steeplogic-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }

  .steeplogic-container {
    position: relative;
    overflow: hidden;
  }

  .steeplogic-container .steeplogic-svg {
    transition: transform 0.2s ease-out;
  }

  .steeplogic-container:hover .steeplogic-svg {
    transform: scale(1.05);
  }

  .steeplogic-fade-in {
    animation: steeplogic-fade-in 0.5s ease-out;
  }

  @keyframes steeplogic-fade-in {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  .steeplogic-slide-up {
    animation: steeplogic-slide-up 0.4s ease-out;
  }

  @keyframes steeplogic-slide-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = steeplogicStyles;
  document.head.appendChild(styleElement);
}

export const Steeplogic = (props) => {
  const {
    // Display options
    logo = true,
    steeplogic = true,
    underscore = true,
    color = "black",
    underscore_color = "#FF0708",
    expanded = true,

    // Size and positioning
    width = null,
    height = null,
    responsive = true,
    aspectRatio = null,

    // Animation options
    animated = true,
    animationDuration = 300,
    animationEasing = "ease-in-out",
    hoverEffect = true,
    onAnimationComplete = null,

    // Advanced styling
    className = "",
    style = {},
    id = null,
  } = props;

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentExpanded, setCurrentExpanded] = useState(expanded);
  const prevExpandedRef = useRef(expanded);

  // Handle state changes with animation
  useEffect(() => {
    if (prevExpandedRef.current !== expanded && animated) {
      setIsAnimating(true);

      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentExpanded(expanded);
        onAnimationComplete?.(expanded);
      }, animationDuration);

      return () => clearTimeout(timer);
    } else {
      setCurrentExpanded(expanded);
    }

    prevExpandedRef.current = expanded;
  }, [expanded, animated, animationDuration, onAnimationComplete]);

  // Default dimensions based on state
  const defaultWidth = currentExpanded ? 189 : 29;
  const defaultHeight = currentExpanded ? 29 : 29;
  const viewBox = currentExpanded ? "0 0 189 29" : "0 0 29 29";

  // Calculate dimensions - prioritize passed props over defaults
  const svgWidth = width !== null && width !== undefined ? width : (responsive ? "100%" : defaultWidth);
  const svgHeight = height !== null && height !== undefined ? height : (responsive ? "auto" : defaultHeight);

  // Animation styles
  const animationStyles = animated ? {
    transition: `all ${animationDuration}ms ${animationEasing}`,
    transformOrigin: "center",
  } : {};

  const hoverStyles = hoverEffect ? {
    '&:hover': {
      transform: 'scale(1.05)',
      filter: 'brightness(1.1)',
    }
  } : {};

  // Combine styles
  const combinedStyles = {
    ...animationStyles,
    ...style,
    ...hoverStyles,
  };

  // Expanded SVG content
  const ExpandedSVG = () => (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`steeplogic-svg ${className} ${isAnimating ? 'animating' : ''}`}
      style={combinedStyles}
      id={id}
    >
      <g clipPath="url(#clip0_expanded)">
        <path d="M5.80006 17.39L0 23.1899V28.99H23.2001L29 23.1899V17.39V11.59H23.2001H17.4H11.6L17.4 5.7899H11.6L5.80006 11.59V17.39ZM23.2001 11.59V17.39L17.4 23.1899H11.6L17.4 17.39H5.80006H0V11.59V5.7899L5.80006 -0.0100113H11.6H23.2001H29V5.7899L23.2001 11.59Z" fill={logo && steeplogic ? underscore_color : color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M39 22.1048V18.4606H48.2466V15.6866H39V9.97549L42.1003 6.87516H52.8155V10.5194H43.5689V13.1846H52.8155V19.0861L49.7967 22.1048H39Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M55.2057 4.42754L59.7746 3.06775V7.41908H65.0506V11.2265H59.7746V18.2974H65.0506V22.1048H58.4692L55.2057 18.8413V4.42754Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M66.6739 19.0045V9.97549L69.7742 6.87516H80.5437V15.469H71.2428V18.2974H79.9998V22.1048H69.7742L66.6739 19.0045ZM71.2428 13.239L76.6819 12.967V10.3562H71.2428V13.239Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M82.7151 19.0045V9.97549L85.8155 6.87516H96.585V15.469H87.284V18.2974H96.0411V22.1048H85.8155L82.7151 19.0045ZM87.284 13.239L92.7232 12.967V10.3562H87.284V13.239Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M98.974 25.9122V6.87516H110.015L113.442 10.3018V18.6781L110.015 22.1048H103.543V25.9122H98.974ZM108.873 10.6826H103.543V18.2974H108.873V10.6826Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M117.867 22.1048V3.06775H122.436V22.1048H117.867Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M124.82 19.0045V9.97549L127.92 6.87516H135.862L138.962 9.97549V19.0045L135.862 22.1048H127.92L124.82 19.0045ZM129.389 18.4606H134.393V10.5194H129.389V18.4606Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M141.997 25.9122V22.1048H150.754V19.9292H144.227L141.127 16.8288V9.97549L144.336 6.87516H155.323V22.2136L151.624 25.9122H141.997ZM145.696 10.6826V16.2849H150.754V10.6826H145.696Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M157.943 22.2015V11.0043H162.512V22.2015H157.943ZM157.943 9.59014V6.5986H162.512V9.59014H157.943Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M164.897 19.0045V9.97549L167.997 6.87516H177.57V11.0089H169.466V17.9711H177.57V22.1048H167.997L164.897 19.0045Z" fill={color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
        <path d="M179.935 22.1048V19.0831H189V22.1048H179.935Z" fill={underscore_color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
      </g>
      <defs>
        <clipPath id="clip0_expanded">
          <rect width="189" height="29" fill="white" transform="translate(0 -0.0100098)"/>
        </clipPath>
      </defs>
    </svg>
  );

  // Collapsed SVG content (Logo only)
  const CollapsedSVG = () => (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`steeplogic-svg collapsed ${className} ${isAnimating ? 'animating' : ''}`}
      style={combinedStyles}
      id={id}
    >
      <g clipPath="url(#clip0_collapsed)">
        <path d="M5.80006 17.39L0 23.1899V28.99H23.2001L29 23.1899V17.39V11.59H23.2001H17.4H11.6L17.4 5.7899H11.6L5.80006 11.59V17.39ZM23.2001 11.59V17.39L17.4 23.1899H11.6L17.4 17.39H5.80006H0V11.59V5.7899L5.80006 -0.0100113H11.6H23.2001H29V5.7899L23.2001 11.59Z" fill={logo && steeplogic ? underscore_color : color} style={{ transition: `fill ${animationDuration}ms ${animationEasing}` }} />
      </g>
      <defs>
        <clipPath id="clip0_collapsed">
          <rect width="29" height="29" fill="white" transform="translate(0 -0.0100098)" />
        </clipPath>
      </defs>
    </svg>
  );

  return currentExpanded ? <ExpandedSVG /> : <CollapsedSVG />;
};
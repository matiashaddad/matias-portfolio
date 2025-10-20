import { useState } from 'react';
import { LucideAtom } from 'lucide-react';

const IconPython = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 255">
    <defs>
      <linearGradient id="logosPython0" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
        <stop offset="0%" stopColor="#387EB8"></stop>
        <stop offset="100%" stopColor="#366994"></stop>
      </linearGradient>
      <linearGradient id="logosPython1" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
        <stop offset="0%" stopColor="#FFE052"></stop>
        <stop offset="8.333%" stopColor="#FFDD35"></stop>
        <stop offset="100%" stopColor="#FFC331"></stop>
      </linearGradient>
    </defs>
    <path fill="url(#logosPython0)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13Z"></path>
    <path fill="url(#logosPython1)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13Z"></path>
  </svg>
);

const IconSQL = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
    <path fill="#ffda44" d="M8.562 15.256A21.159 21.159 0 0 0 16 16.449a21.159 21.159 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.357 10.357 0 0 1-2.084 1.076A22.293 22.293 0 0 1 16 12.078a22.36 22.36 0 0 1-7.879-1.3A10.28 10.28 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006Zm0 6.705a15.611 15.611 0 0 0 2.6.741a24.9 24.9 0 0 0 4.838.453a24.9 24.9 0 0 0 4.838-.452a15.614 15.614 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.706 10.706 0 0 1-1.692.825A23.49 23.49 0 0 1 16 18.74a23.49 23.49 0 0 1-8.271-1.348a10.829 10.829 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001ZM16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.487 23.487 0 0 1 16 25.445a23.422 23.422 0 0 1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30Z"></path>
    <ellipse cx="16" cy="5.894" fill="#ffda44" rx="9.963" ry="3.894"></ellipse>
  </svg>
);

const IconJavascript = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
    <g fill="none">
      <rect width="256" height="256" fill="#F0DB4F" rx="60"></rect>
      <path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
    </g>
  </svg>
);

const IconNodejs = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128">
    <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772c8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086c-3.146 1.783-3.726 2.02-6.677 3.043c-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 0 0 4.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066c-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566c0 7.466 4.059 16.512 23.453 16.512c14.039 0 22.088-5.455 22.088-15.109c0-9.572-6.467-12.084-20.082-13.886c-13.762-1.819-15.16-2.738-15.16-5.962c0-2.658 1.184-6.203 11.374-6.203c9.105 0 12.461 1.954 13.842 8.091c.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396c.24-.272.367-.613.335-.979c-.891-10.568-7.912-15.493-22.112-15.493c-12.631 0-20.166 5.334-20.166 14.275c0 9.698 7.497 12.378 19.622 13.577c14.505 1.422 15.633 3.542 15.633 6.395c0 4.955-3.978 7.066-13.309 7.066z"></path>
  </svg>
);

const IconVitejs = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 257">
    <defs>
      <linearGradient id="logosVitejs0" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
        <stop offset="0%" stopColor="#41D1FF"></stop>
        <stop offset="100%" stopColor="#BD34FE"></stop>
      </linearGradient>
      <linearGradient id="logosVitejs1" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
        <stop offset="0%" stopColor="#FFEA83"></stop>
        <stop offset="8.333%" stopColor="#FFDD35"></stop>
        <stop offset="100%" stopColor="#FFA800"></stop>
      </linearGradient>
    </defs>
    <path fill="url(#logosVitejs0)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path>
    <path fill="url(#logosVitejs1)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path>
  </svg>
);

const IconTailwindcss = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128">
    <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
  </svg>
);

const TechIconMap = {
  'Python': IconPython,
  'SQL': IconSQL,
  'JavaScript': IconJavascript,
  'Node.js': IconNodejs,
  'Vite': IconVitejs,
  'Tailwind': IconTailwindcss,
  'React': LucideAtom,
};

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isDataProject = project.technologies.includes('Python') || project.technologies.includes('SQL');

  const iconColorClass = isDataProject ? 'project-icon-data' : 'project-icon-web';

  const cardFlipperClasses = `card-flipper ${isFlipped ? 'rotate-y-180' : ''}`;

  const getProjectIcon = () => {
    const icons = project.technologies
      .map(tech => {
        const IconComponent = TechIconMap[tech];
        return IconComponent ? <IconComponent key={tech} size={24} /> : null;
      })
      .filter(icon => icon !== null);

    if (icons.length > 0) {
      return (
        <div className={`flex items-center space-x-6 ${iconColorClass}`}>
          {icons}
        </div>
      );
    }

    return <LucideAtom size={24} />;
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(true)}
    >
      <div className={cardFlipperClasses}>

        <div className="card-face card-front">
          <div className="flex items-center justify-between">
            <h3 className="card-title">{project.name}</h3>
            {getProjectIcon()}
          </div>

          <p className="card-view-link">View Project</p>
        </div>

        <div className="card-face card-back">
          <h4 className="card-title-back">{project.name}</h4>

          {/* Description */}
          {project.description && (
            <p className="text-sm text-gray-700 mb-3 leading-snug">
              {project.description}
            </p>
          )}

          <p className="text-sm font-semibold mb-2 text-black/70">Key Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="tech-tag bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium shadow-sm transition-transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <span className="text-black/80 font-medium text-sm hover:underline">
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

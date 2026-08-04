import { MapCanvas } from './MapCanvas';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="layout">
        {/* TODO function not implemented */}
      <Sidebar onLoad={function (): void {
              throw new Error('Function not implemented.');
          } } />
      <MapCanvas />
    </div>
  );
}
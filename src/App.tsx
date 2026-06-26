import Content from './Content/Content';
import Menu from './Menu/Menu.tsx';

export default function App() {
  return (
    <div className="relative w-full min-h-screen text-slate-200">
      <Menu />
      <Content />
    </div>
  )
}
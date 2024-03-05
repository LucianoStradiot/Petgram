import { useEffect } from 'react';
import Logout from '../components/authentication/Logout';
import { useNavigateContext } from '../context/navigationContext';
import ConfiguracionPage from '../components/settings/Settings';
import notificationsIcon from '../assets/images/notifications.svg';
import savedIcon from '../assets/images/save.svg';
import settingsIcon from '../assets/images/settings.svg';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const { setActive } = useNavigateContext();

  useEffect(() => {
    setActive('menu');
  }, []);
  return (
    <main className="bg-gray-100 min-h-screen">
      <ConfiguracionPage />
      <div className="py-8">
        <div className="px-4 flex flex-col gap-y-8 pb-8 border-b border-gray-500">
          <NavLink className={`flex gap-x-2 items-center`}>
            <img src={notificationsIcon} className="w-6 h-6" alt="Notification icon" />
            <p className="text-title-md">Notifications</p>
          </NavLink>
          <NavLink className={`flex gap-x-2 items-center`} to={'/saved'}>
            <img src={savedIcon} className="w-6 h-6" alt="Save icon" />
            <p>Save</p>
          </NavLink>
          <NavLink className={`flex gap-x-2 items-center`}>
            <img src={settingsIcon} className="w-6 h-6" alt="Settings icon" />
            <p>Settings</p>
          </NavLink>
        </div>
        <div className="px-4 pt-8">
          <Logout />
        </div>
      </div>
    </main>
  );
}

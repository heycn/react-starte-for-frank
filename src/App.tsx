import { Icon } from '@iconify/react/dist/iconify.js'
import { useUserStore } from '@/stores/user_store'
import { useTheme } from '@/hooks/use_theme'

export const App: React.FC = () => {
  const { user, updateUser } = useUserStore()
  const { theme, toggleTheme } = useTheme()
  const onClickAge = () => {
    updateUser({ age: user.age + 1 })
  }

  return (
    <div className="bg-pink-500 border border-black text-lg p-8 w-96 m-auto dark:bg-black dark:text-white dark:border-white">
      <div className="underline ">
        Hello world!
        <Icon
          className="dark:text-blue-500 w-[1.2em] h-[1.2em] text-gray-500"
          icon="bi:bag-heart-fill"
        />
        <button onClick={toggleTheme}>{theme}</button>
      </div>
      <div>
        User Age:
        <button onClick={onClickAge}>{user.age}</button>
      </div>
    </div>
  )
}

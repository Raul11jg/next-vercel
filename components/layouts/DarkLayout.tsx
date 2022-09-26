import { FC } from 'react'

export const DarkLayout: FC = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(222,222,222,0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>DarkLayout</h3>
        <div>
            {children}
        </div>

    </div>
  )
}

import { useInView } from '../hooks/useInView'

export default function Reveal({ children, className = '' }) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} className={`in-view ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

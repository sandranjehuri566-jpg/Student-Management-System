import { useState, useEffect } from 'react'

// Waits until the user stops typing before returning the updated value.
// Used on the search bar so we don't re-filter on every keystroke.
function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
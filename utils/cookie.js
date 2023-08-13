const cookie = {
    get(cookieName) {
      const name = cookieName + '='
      let cookieDecoded = '' //to be careful
      if (typeof document !== 'undefined')
        cookieDecoded = decodeURIComponent(document.cookie)
      const cookieArr = cookieDecoded.split('; ')
      let res
      cookieArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length)
      })
      return res
    },
  
    set(cookieName, cookieValue, expDays) {
      let date = new Date()
      date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
      const expires = date.toUTCString()
      const isSecure =
        typeof window !== 'undefined' && window.location.protocol === 'https:'
          ? true
          : false
      document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; SameSite=Lax; path=/; ${
        isSecure ? 'Secure;' : ''
      }`
    },
  
    delete(cookieName) {
      document.cookie = `${cookieName}=; path=/; max-age=0`
      // sometimes cookie path becomes /en or /es according to language and token could not be deleted successfully. We could not find the reason yet but just to be sure we are also trying to delete these.
      document.cookie = `${cookieName}=; path=/en; max-age=0`
      document.cookie = `${cookieName}=; path=/es; max-age=0`
    }
  }
  
  export default cookie
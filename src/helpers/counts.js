const getTotalRedeemed = (grudges) => {
  return grudges.filter((grudge)=>{
    return grudge.forgiven === true
  }).length
}

const getTotalUnforgiven = (grudges) => {
  return grudges.filter((grudge)=>{
    return grudge.forgiven === false
  }).length
}

module.exports = {getTotalRedeemed, getTotalUnforgiven}

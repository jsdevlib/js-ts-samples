export const FindOdd = (s: string): string => {
  const array = s.split('');

  const arraySorted = array.filter((x) => IsOdd(x)).sort();

  const groupedObj = GroupArray(arraySorted);

  const values: number[] = Object.values(groupedObj);

  const max = Math.max(...values);

  return GetPropertyName(groupedObj, max);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetPropertyName = (groupedObj: any, max: number): string => {
  let result = '';

  for (const propName in groupedObj) {
    if (groupedObj[propName] === max) {
      result = propName;
    }
  }

  return result;
};

export const IsOdd = (value: string) => {
  if (value === '' || value === undefined || value === null) return;

  let parsed: number = parseInt(value);

  if (typeof parsed !== 'number' || isNaN(parsed)) {
    parsed = value.charCodeAt(0);
  }

  return parsed % 2 !== 0 ?? false;
};

export const GroupArray = (array: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return array.reduce(function (prev: any, item) {
    if (item in prev) prev[item]++;
    else prev[item] = 1;
    return prev;
  }, {});
};

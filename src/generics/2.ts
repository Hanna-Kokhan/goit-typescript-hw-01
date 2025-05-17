type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopPart = Pick<AllType, "name" | "color">;
type BottomPart = Pick<AllType, "position" | "weight">;

function compare<T extends TopPart, U extends BottomPart>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

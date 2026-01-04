"use client";

const DiscoverBox = ({
  data,
}: {
  data: {
    icon: string;
    key: string;
    value: string;
    title: string;
    color: string;
  };
}) => {
  return (
    <div key={data.key} className="group cursor-pointer">
      <div
        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 `}
        style={{
          borderColor: data.color,
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center justify-center size-16  p-4 rounded-xl shrink-0`}
            style={{
              backgroundColor: data.color,
              opacity: 0.6,
            }}
          >
            <i className={`${data.icon}  text-2xl text-white`} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-600 truncate">
              {data.title}
            </p>
            <p className={`text-3xl font-bold`} style={{ color: data.color }}>
              {data.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverBox;
